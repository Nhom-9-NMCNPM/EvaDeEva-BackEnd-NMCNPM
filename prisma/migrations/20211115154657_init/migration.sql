-- CreateTable
CREATE TABLE "Trousers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "codePro" TEXT NOT NULL,
    "size_M" INTEGER NOT NULL,
    "size_S" INTEGER NOT NULL,
    "size_L" INTEGER NOT NULL,
    "size_XL" INTEGER NOT NULL,
    "material" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shirt" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "codePro" TEXT NOT NULL,
    "size_M" INTEGER NOT NULL,
    "size_S" INTEGER NOT NULL,
    "size_L" INTEGER NOT NULL,
    "size_XL" INTEGER NOT NULL,
    "material" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dress" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "codePro" TEXT NOT NULL,
    "size_M" INTEGER NOT NULL,
    "size_S" INTEGER NOT NULL,
    "size_L" INTEGER NOT NULL,
    "size_XL" INTEGER NOT NULL,
    "material" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skirt" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "codePro" TEXT NOT NULL,
    "size_M" INTEGER NOT NULL,
    "size_S" INTEGER NOT NULL,
    "size_L" INTEGER NOT NULL,
    "size_XL" INTEGER NOT NULL,
    "material" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "staff" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "namePro" TEXT[],
    "price" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
