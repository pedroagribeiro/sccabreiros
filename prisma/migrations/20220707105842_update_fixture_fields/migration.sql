/*
  Warnings:

  - Added the required column `season` to the `Fixture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fixture" ADD COLUMN     "season" TEXT NOT NULL,
ALTER COLUMN "homeTeamGoals" DROP NOT NULL,
ALTER COLUMN "awayTeamGoals" DROP NOT NULL,
ALTER COLUMN "round" DROP NOT NULL;
