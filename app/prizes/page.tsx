import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { prize } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export default async function PrizePage() {
  const prizes = await db.query.prize.findMany()
  async function deleteAllPrizes() {
    "use server"
    await db.delete(prize).where(eq(prize.name, "prize-1"))
  }
  async function generatePrizes() {
    "use server"
    await db.insert(prize).values([{ name: "prize-1" }, { name: "prize-2" }])
  }
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
