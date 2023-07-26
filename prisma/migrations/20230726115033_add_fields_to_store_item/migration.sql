/*
  Warnings:

  - You are about to drop the `storeItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "storeItemCategory" AS ENUM ('footballBoot', 'trainer', 'other');

-- DropTable
DROP TABLE "storeItems";

-- CreateTable
CREATE TABLE "storeItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" "storeItemCategory" NOT NULL,

    CONSTRAINT "storeItem_pkey" PRIMARY KEY ("id")
);
