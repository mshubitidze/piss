"use server"

import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { prize } from "@/lib/db/schema"

import { dbData } from "./data"

export async function generate() {
  await db.insert(prize).values(dbData)
  revalidatePath("/prizes")
}

export async function deleteAll() {
  await db.delete(prize)
  revalidatePath("/prizes")
}

export async function deletePrize(id: number) {
  await db.delete(prize).where(eq(prize.id, id))
  revalidatePath("/prizes")
}
