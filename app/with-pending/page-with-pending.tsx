import { Suspense } from "react"

import { deleteAll, deletePrize, generate } from "@/lib/actions"
import { db } from "@/lib/db"
import { Skeleton } from "@/components/ui/skeleton"

import { ButtonWithPending } from "./button-with-pending"

export const revalidate = 0

function PrizesLoading() {
  const length = 12
  return (
    <>
      {Array.from({ length }).map((_) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <Skeleton className="h-[40px] w-[110px]" />
          <Skeleton className="h-[114px] w-[176px]" />
        </div>
      ))}
    </>
  )
}

async function FetchPrizes() {
  const prizes = await db.query.prize.findMany()

  // await new Promise((res) => setTimeout(res, 5000))

  return (
    <>
      {prizes.map((p) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <form>
            <ButtonWithPending
              variant="destructive"
              action={p.id}
              formAction={async () => {
                "use server"
                await deletePrize(p.id)
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

export default function PendingPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <form>
          <ButtonWithPending
            variant="default"
            action="generate"
            formAction={generate}
          >
            generate
          </ButtonWithPending>
        </form>

        <form>
          <ButtonWithPending
            variant="destructive"
            action="delete"
            formAction={deleteAll}
          >
            delete all
          </ButtonWithPending>
        </form>
      </div>
      <Suspense fallback={<PrizesLoading />}>
        {/* @ts-expect-error server component */}
        <FetchPrizes />
      </Suspense>
    </>
  )
}
