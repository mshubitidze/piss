import { Suspense } from "react"

import { db } from "@/lib/db"
import { Skeleton } from "@/components/ui/skeleton"

import { ButtonWithTransition } from "./button-with-transition"

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
          <ButtonWithTransition variant="destructive" action={p.id}>
            {`delete ${p.id}`}
          </ButtonWithTransition>
          <pre className="rounded-md border p-2">
            {JSON.stringify(p, null, 2)}
          </pre>
        </div>
      ))}
    </>
  )
}

export default function TransitionPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <ButtonWithTransition variant="default" action="generate">
          generate
        </ButtonWithTransition>
        <ButtonWithTransition variant="destructive" action="delete">
          delete all
        </ButtonWithTransition>
      </div>
      <Suspense fallback={<PrizesLoading />}>
        {/* @ts-expect-error server component */}
        <FetchPrizes />
      </Suspense>
    </>
  )
}
