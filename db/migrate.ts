import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import db from "./server";
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.local",
});

migrate(db, { migrationsFolder: "./drizzle" });
