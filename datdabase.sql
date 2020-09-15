CREATE TABLE "vehicles" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "manufacturer" text NOT NULL,
  "model" text NOT NULL,
  "version" text NOT NULL,
  "year" int NOT NULL,
  "fuel" text NOT NULL,
  "price" int NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "files" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "path" text NOT NULL,
  "vehicle_id" int
);

CREATE TABLE "admins" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "email" text UNIQUE,
  "password" text
);

CREATE TABLE "messages" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "email" text,
  "phone" number,
  "message" text
);

ALTER TABLE "files" ADD FOREIGN KEY ("vehicle_id") REFERENCES "vehicles" ("id");
