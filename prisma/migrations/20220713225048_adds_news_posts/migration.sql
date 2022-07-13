-- CreateTable
CREATE TABLE "NewsPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "playerId" INTEGER,
    "fixtureId" INTEGER,

    CONSTRAINT "NewsPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NewsPost" ADD CONSTRAINT "NewsPost_fixtureId_fkey" FOREIGN KEY ("fixtureId") REFERENCES "Fixture"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NewsPost" ADD CONSTRAINT "NewsPost_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Roster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
