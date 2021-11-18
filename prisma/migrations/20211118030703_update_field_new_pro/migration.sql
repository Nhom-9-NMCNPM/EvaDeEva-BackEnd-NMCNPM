/*
  Warnings:

  - You are about to drop the column `new` on the `Dress` table. All the data in the column will be lost.
  - You are about to drop the column `new` on the `Shirt` table. All the data in the column will be lost.
  - You are about to drop the column `new` on the `Skirt` table. All the data in the column will be lost.
  - You are about to drop the column `new` on the `Trousers` table. All the data in the column will be lost.
  - Added the required column `newPro` to the `Dress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newPro` to the `Shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newPro` to the `Skirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newPro` to the `Trousers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dress" DROP COLUMN "new",
ADD COLUMN     "newPro" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Shirt" DROP COLUMN "new",
ADD COLUMN     "newPro" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Skirt" DROP COLUMN "new",
ADD COLUMN     "newPro" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Trousers" DROP COLUMN "new",
ADD COLUMN     "newPro" BOOLEAN NOT NULL;
