import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { deleteAllPrizes, generatePrizes } from "./actions"

export default async function PrizePage() {
  const prizes = await db.query.prize.findMany()
  return (
    <div className="container my-20 grid grid-cols-2 gap-20">
      <form action={generatePrizes}>
        <Button variant={"default"}>generate</Button>
      </form>
      <form action={deleteAllPrizes}>
        <Button variant={"destructive"}>delete all prize-1</Button>
      </form>
      <div>
        {prizes.map((prize) => (
          <div>{prize.name}</div>
        ))}
      </div>
    </div>
  )
}
