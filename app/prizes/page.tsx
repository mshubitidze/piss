import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { NewPrize, prize } from "@/lib/db/schema"
import { Button } from "@/components/ui/button"

export const revalidate = 0

const dbData: NewPrize[] = [
  { name: "what" },
  { name: "kekw" },
  { name: "420" },
  { name: "69" },
]

export default async function PrizePage() {
  const prizes = await db.query.prize.findMany()

  return (
    <div className="container my-20 grid grid-cols-5 gap-8">
      <form
        className="flex flex-col items-center gap-2"
        action={async () => {
          "use server"
          await db.insert(prize).values(dbData)
          revalidatePath("/prizes")
        }}
      >
        <Button className="w-full" variant={"default"}>
          generate data
        </Button>
        <Button
          className="w-full"
          variant={"destructive"}
          formAction={async () => {
            "use server"
            await db.delete(prize)
            revalidatePath("/prizes")
          }}
        >
          delete all
        </Button>
      </form>
      {prizes.map((p) => (
        <div className="flex flex-col items-center justify-center gap-2">
          <form
            action={async () => {
              "use server"
              await db.delete(prize).where(eq(prize.id, p.id))
              revalidatePath("/prizes")
            }}
          >
            <Button className="self-end" variant={"outline"}>
              delete {p.id}
            </Button>
          </form>
          <pre className="rounded-md border p-2">
            {JSON.stringify(p, null, 2)}
          </pre>
        </div>
      ))}
    </div>
  )
}
