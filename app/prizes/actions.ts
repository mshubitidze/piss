"use server"

import { db } from "@/lib/db"
import { prize } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export async function deleteAllPrizes() {
  await db.delete(prize).where(eq(prize.name, "prize-1"))
}
export async function generatePrizes() {
  await db.insert(prize).values([{ name: "prize-1" }, { name: "prize-2" }])
}
