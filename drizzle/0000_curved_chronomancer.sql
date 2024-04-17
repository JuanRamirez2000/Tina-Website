CREATE TABLE IF NOT EXISTS "links" (
	"url" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"colors" text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "links" ("url");