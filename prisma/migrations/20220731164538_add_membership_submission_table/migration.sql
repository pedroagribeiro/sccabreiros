/*
  Warnings:

  - Added the required column `handled` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "handled" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "MembershipSubmission" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "MembershipSubmission_pkey" PRIMARY KEY ("id")
);
