import { Suspense } from "react"
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { prize } from "@/lib/db/schema"
import { Skeleton } from "@/components/ui/skeleton"

import { dbData } from "./data"
import ButtonWithPending from "./prize-action-with-pending"

export const revalidate = 0

function PrizesLoading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <Skeleton className="h-[40px] w-[105px]" />
        <Skeleton className="h-[186px] w-[220px]" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Skeleton className="h-[40px] w-[105px]" />
        <Skeleton className="h-[186px] w-[220px]" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Skeleton className="h-[40px] w-[105px]" />
        <Skeleton className="h-[186px] w-[220px]" />
      </div>
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
            <ButtonWithPending
              variant="outline"
              formAction={async () => {
                "use server"
                await db.delete(prize).where(eq(prize.id, p.id))
                revalidatePath("/prizes")
              }}
            >
              {`delete ${p.id}`}
            </ButtonWithPending>
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
  async function generate() {
    "use server"
    await db.insert(prize).values(dbData)
    revalidatePath("/prizes")
  }

  async function deleteAll() {
    "use server"
    await db.delete(prize)
    revalidatePath("/prizes")
  }

  return (
    <div className="container my-10 grid grid-cols-1 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      <div className="flex flex-col items-center gap-2">
        <form>
          <ButtonWithPending variant="default" formAction={generate}>
            generate
          </ButtonWithPending>
        </form>
        <form>
          <ButtonWithPending
            variant="destructive"
            formAction={deleteAll}
          >
            delete all
          </ButtonWithPending>
        </form>
      </div>
      <Suspense fallback={<PrizesLoading />}>
        {/* @ts-ignore server component */}
        <FetchPrizes />
      </Suspense>
    </div>
  )
}
