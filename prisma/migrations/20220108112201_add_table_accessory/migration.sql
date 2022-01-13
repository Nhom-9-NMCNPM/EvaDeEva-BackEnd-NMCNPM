-- CreateTable
CREATE TABLE "Accessory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "codePro" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "material" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL,
    "img" TEXT[],
    "newPro" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);
