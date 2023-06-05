import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { prize } from "@/lib/db/schema"
import { Button } from "@/components/ui/button"

export default async function PrizePage() {
  const prizes = await db.query.prize.findMany()

  return (
    <div className="container my-20 grid grid-cols-5 gap-8">
      <form
        className="flex flex-col items-center justify-center gap-2"
        action={async () => {
          "use server"
          await db.insert(prize).values([
            {
              name: "what",
            },
            {
              name: "kekw",
            },
            {
              name: "420",
            },
          ])
          revalidatePath("/prizes")
        }}
      >
        <Button className="w-full" variant={"default"}>
          generate data
        </Button>
      </form>
      {prizes.map((p) => (
        <div className="flex flex-col items-center justify-center">
          <form
            action={async () => {
              "use server"
              await db.delete(prize).where(eq(prize.name, p.name))
              revalidatePath("/prizes")
            }}
          >
            <Button variant={"destructive"}>delete {p.name}</Button>
          </form>
          <pre>{JSON.stringify(p, null, 2)}</pre>
        </div>
      ))}
    </div>
  )
}
