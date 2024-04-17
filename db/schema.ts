import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const linksTable = pgTable("links", {
  url: serial("url").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  colors: text("colors").notNull(),
});
