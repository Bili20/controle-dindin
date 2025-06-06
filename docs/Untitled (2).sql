CREATE TABLE "users" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar NOT NULL,
  "user" varchar NOT NULL,
  "password" varchar NOT NULL
);

CREATE TABLE "objective" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar NOT NULL,
  "value" double precision  NOT NULL,
  "create_at" timestamp,
  "final_date" timestamp NOT NULL,
  "user_id" int NOT NULL
);

CREATE TABLE "values" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar NOT NULL,
  "value" double precision  NOT NULL,
  "created_at" timestamp,
  "user_id" int NOT NULL,
  "objective_month_id" int NOT NULL
);

CREATE TABLE "objective_month" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "total_value_month" double precision,
  "savings_value" double precision  NOT NULL,
  "created_at" timestamp,
  "objective_id" int NOT NULL,
  "user_id" int NOT NULL,
  "phrase_id" int
);

CREATE TABLE "objetive_levels" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "motivational_phrase" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "phrase" varchar NOT NULL,
  "levels_id" int NOT NULL
);

ALTER TABLE "values" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "objective" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "objective_month" ADD FOREIGN KEY ("objective_id") REFERENCES "objective" ("id");

ALTER TABLE "objective_month" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "motivational_phrase" ADD FOREIGN KEY ("levels_id") REFERENCES "objetive_levels" ("id");

ALTER TABLE "objective_month" ADD FOREIGN KEY ("phrase_id") REFERENCES "motivational_phrase" ("id");

ALTER TABLE "values" ADD FOREIGN KEY ("objective_month_id") REFERENCES "objective_month" ("id");

ALTER TABLE "objective_month" 
ADD CONSTRAINT "objective_month_user_objective_unique" UNIQUE ("user_id", "objective_id");