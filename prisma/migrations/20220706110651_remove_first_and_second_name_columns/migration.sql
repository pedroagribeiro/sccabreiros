/*
  Warnings:

  - You are about to drop the column `firstName` on the `Roster` table. All the data in the column will be lost.
  - You are about to drop the column `secondName` on the `Roster` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `Roster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `Roster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Roster" DROP COLUMN "firstName",
DROP COLUMN "secondName",
ADD COLUMN     "fullname" TEXT NOT NULL,
ADD COLUMN     "nickname" TEXT NOT NULL;
