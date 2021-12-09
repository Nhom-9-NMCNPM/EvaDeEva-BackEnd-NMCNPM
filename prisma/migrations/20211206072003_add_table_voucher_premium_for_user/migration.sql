-- CreateTable
CREATE TABLE "VoucherPremium" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "disCount" INTEGER NOT NULL,
    "condition" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
