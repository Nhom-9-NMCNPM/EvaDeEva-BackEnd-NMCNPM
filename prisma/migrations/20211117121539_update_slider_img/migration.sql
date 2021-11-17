/*
  Warnings:

  - Added the required column `new` to the `Dress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publish` to the `Dress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `new` to the `Shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publish` to the `Shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `new` to the `Skirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publish` to the `Skirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `new` to the `Trousers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publish` to the `Trousers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dress" ADD COLUMN     "new" BOOLEAN NOT NULL,
ADD COLUMN     "publish" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Shirt" ADD COLUMN     "new" BOOLEAN NOT NULL,
ADD COLUMN     "publish" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Skirt" ADD COLUMN     "new" BOOLEAN NOT NULL,
ADD COLUMN     "publish" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Trousers" ADD COLUMN     "new" BOOLEAN NOT NULL,
ADD COLUMN     "publish" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "SliderImg" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BannerImg" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
