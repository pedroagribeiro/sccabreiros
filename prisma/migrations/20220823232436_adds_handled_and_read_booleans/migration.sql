-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "read" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MembershipSubmission" ADD COLUMN     "handled" BOOLEAN NOT NULL DEFAULT false;
