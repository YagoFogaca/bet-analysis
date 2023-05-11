-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "corners_home" INTEGER NOT NULL,
    "corners_visiting" INTEGER NOT NULL,
    "goals_home" INTEGER NOT NULL,
    "goals_visiting" INTEGER NOT NULL,
    "yellow_cards_home" INTEGER NOT NULL,
    "yellow_cards_visiting" INTEGER NOT NULL,
    "red_cards_home" INTEGER NOT NULL,
    "red_cards_visiting" INTEGER NOT NULL,
    "off_side_home" INTEGER NOT NULL,
    "off_side_visiting" INTEGER NOT NULL,
    "id_team_home" TEXT NOT NULL,
    "id_team_visiting" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "games_id_key" ON "games"("id");

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_id_team_home_fkey" FOREIGN KEY ("id_team_home") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_id_team_visiting_fkey" FOREIGN KEY ("id_team_visiting") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
