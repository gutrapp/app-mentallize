import { pgTable } from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {});

export const addresses = pgTable("addresses", {});

export const cellphones = pgTable("cellphones", {});
