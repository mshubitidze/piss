import { Suspense } from "react"
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { prize } from "@/lib/db/schema"
import { Skeleton } from "@/components/ui/skeleton"

import { dbData } from "./data"
import PrizeActionPending from "./prize-action-pending"

export const revalidate = 0

function PrizesLoading() {
  return (
    <>
      {Array.from({ length: 2 }).map((_) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <Skeleton className="h-[40px] w-[105px]" />
          <Skeleton className="h-[186px] w-[220px]" />
        </div>
      ))}
    </>
  )
}

async function FetchPrizes() {
  const prizes = await db.query.prize.findMany()

  return (
    <>
      {prizes.map((p) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <form>
            <PrizeActionPending
              variant="outline"
              formAction={async () => {
                "use server"
                await db.delete(prize).where(eq(prize.id, p.id))
                revalidatePath("/prizes")
              }}
              buttonText={`delete`}
            />
          </form>
          <pre className="rounded-md border p-2">
            {JSON.stringify(p, null, 2)}
          </pre>
        </div>
      ))}
    </>
  )
}

export default function PrizePage() {
  return (
    <div className="container my-20 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div className="flex flex-col items-center gap-2">
        <form>
          <PrizeActionPending
            variant="default"
            formAction={async () => {
              "use server"
              await db.insert(prize).values(dbData)
              revalidatePath("/prizes")
            }}
            buttonText={"generate things"}
          />
        </form>
        <form>
          <PrizeActionPending
            variant="destructive"
            formAction={async () => {
              "use server"
              await db.delete(prize)
              revalidatePath("/prizes")
            }}
            buttonText={"delete all"}
          />
        </form>
      </div>
      <Suspense fallback={<PrizesLoading />}>
        {/* @ts-ignore server component */}
        <FetchPrizes />
      </Suspense>
    </div>
  )
}
