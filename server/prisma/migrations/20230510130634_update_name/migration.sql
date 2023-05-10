-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "victory" INTEGER NOT NULL,
    "defeat" INTEGER NOT NULL,
    "draw" INTEGER NOT NULL,
    "goals_scored" INTEGER NOT NULL,
    "goals_conceded" INTEGER NOT NULL,
    "corners" INTEGER NOT NULL,
    "off_side" INTEGER NOT NULL,
    "yellow_cards" INTEGER NOT NULL,
    "red_cards" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_id_key" ON "Team"("id");
