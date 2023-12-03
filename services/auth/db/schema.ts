import { sql } from "drizzle-orm";
import { boolean, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  user_id: uuid("user_id").unique().primaryKey(),
  email: varchar("email", { length: 100 }).unique(),
  password: varchar("password", { length: 256 }),
  validatedEmail: varchar("validated_email", {
    length: 10,
    enum: ["invalid", "validated"],
  }).default("invalid"),
});
