import postgres from "postgres";
import { drizzle } from "drizzle-orm/node-postgres";

const dsn = process.env.DB_URL;
if (!dsn) throw new Error("ERROR: Couldn't get dabase connection string");
const client = postgres(dsn);
export const db = drizzle(client);
