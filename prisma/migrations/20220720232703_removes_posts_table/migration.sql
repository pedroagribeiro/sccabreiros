/*
  Warnings:

  - You are about to drop the `NewsPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NewsPost" DROP CONSTRAINT "NewsPost_fixtureId_fkey";

-- DropForeignKey
ALTER TABLE "NewsPost" DROP CONSTRAINT "NewsPost_playerId_fkey";

-- DropTable
DROP TABLE "NewsPost";
