import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"

import {
  deleteAllDiff,
  deleteAllElse,
  deleteAllPrizes,
  deleteAllThing,
  generatePrizes,
} from "./actions"

export default async function PrizePage() {
  const prizes = await db.query.prize.findMany()

  return (
    <div className="container my-20 grid grid-cols-5 gap-8">
      <form
        className="flex items-center justify-center"
        action={generatePrizes}
      >
        <Button variant={"default"}>generate</Button>
      </form>
      <form
        className="flex items-center justify-center"
        action={deleteAllThing}
      >
        <Button variant={"destructive"}>delete thing</Button>
      </form>
      <form className="flex items-center justify-center" action={deleteAllElse}>
        <Button variant={"destructive"}>delete else</Button>
      </form>
      <form className="flex items-center justify-center" action={deleteAllDiff}>
        <Button variant={"destructive"}>delete diff</Button>
      </form>
      <form
        className="flex items-center justify-center"
        action={deleteAllPrizes}
      >
        <Button variant={"destructive"}>delete all</Button>
      </form>
      <div className="col-span-full grid grid-cols-5 gap-8">
        {prizes.map((prize) => (
          <pre>{JSON.stringify(prize, null, 2)}</pre>
        ))}
      </div>
    </div>
  )
}
