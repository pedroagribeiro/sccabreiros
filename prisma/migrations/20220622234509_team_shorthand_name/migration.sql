/*
  Warnings:

  - Added the required column `shorthand_name` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "shorthand_name" TEXT NOT NULL;
