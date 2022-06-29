/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `Member` table. All the data in the column will be lost.
  - Added the required column `email` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "phoneNumber",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
