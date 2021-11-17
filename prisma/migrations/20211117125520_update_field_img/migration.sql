/*
  Warnings:

  - The `img` column on the `Dress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `img` column on the `Shirt` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `img` column on the `Skirt` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `img` column on the `Trousers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Dress" DROP COLUMN "img",
ADD COLUMN     "img" TEXT[];

-- AlterTable
ALTER TABLE "Shirt" DROP COLUMN "img",
ADD COLUMN     "img" TEXT[];

-- AlterTable
ALTER TABLE "Skirt" DROP COLUMN "img",
ADD COLUMN     "img" TEXT[];

-- AlterTable
ALTER TABLE "Trousers" DROP COLUMN "img",
ADD COLUMN     "img" TEXT[];
