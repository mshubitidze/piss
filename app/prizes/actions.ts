"use server"

import { like } from "drizzle-orm";

import { db } from "@/lib/db"
import { prize } from "@/lib/db/schema"
import { prizeData } from "./data"
import { revalidatePath } from "next/cache";

export async function deleteAllThing() {
  await db.delete(prize).where(like(prize.name, "%thing%"))
  revalidatePath("/prizes")
}

export async function deleteAllElse() {
  await db.delete(prize).where(like(prize.name, "%else%"))
  revalidatePath("/prizes")
}

export async function deleteAllDiff() {
  await db.delete(prize).where(like(prize.name, "%diff%"))
  revalidatePath("/prizes")
}

export async function deleteAllPrizes() {
  await db.delete(prize)
  revalidatePath("/prizes")
}

export async function generatePrizes() {
  await db.insert(prize).values(prizeData)
  revalidatePath("/prizes")
}
