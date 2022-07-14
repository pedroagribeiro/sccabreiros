/*
  Warnings:

  - Added the required column `image` to the `NewsPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsPost" ADD COLUMN     "image" TEXT NOT NULL;
