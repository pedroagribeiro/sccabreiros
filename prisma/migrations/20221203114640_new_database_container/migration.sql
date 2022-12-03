/*
  Warnings:

  - You are about to drop the column `read` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `handled` on the `MembershipSubmission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "read";

-- AlterTable
ALTER TABLE "MembershipSubmission" DROP COLUMN "handled";
