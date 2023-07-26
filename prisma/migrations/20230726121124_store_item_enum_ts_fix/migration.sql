/*
  Warnings:

  - Changed the type of `category` on the `storeItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StoreItemCategory" AS ENUM ('footballBoot', 'trainer', 'other');

-- AlterTable
ALTER TABLE "storeItem" DROP COLUMN "category",
ADD COLUMN     "category" "StoreItemCategory" NOT NULL;

-- DropEnum
DROP TYPE "storeItemCategory";
