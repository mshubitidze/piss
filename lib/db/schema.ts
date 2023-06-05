import { InferModel } from "drizzle-orm"
import {
  boolean,
  mysqlTableCreator,
  serial,
  text,
} from "drizzle-orm/mysql-core"

const mysqlTable = mysqlTableCreator((name) => `piss_${name}`)

export const prize = mysqlTable("prize", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  isWinning: boolean("isWinning").default(true),
  isWon: boolean("isWon").default(false),
  imageUrl: text("imageUrl"),
})

export type Prize = InferModel<typeof prize, "select">
export type NewPrize = InferModel<typeof prize, "insert">
