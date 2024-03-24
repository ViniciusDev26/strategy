-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('COMMOM', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "ROLES" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
