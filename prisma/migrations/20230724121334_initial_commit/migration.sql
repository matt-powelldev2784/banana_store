-- CreateTable
CREATE TABLE "storeItems" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "storeItems_pkey" PRIMARY KEY ("id")
);
