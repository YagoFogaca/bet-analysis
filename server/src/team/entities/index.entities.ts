export class ITeamEntity {
  id: string;
  name: string;
  points: number;
  victory: number;
  defeat: number;
  draw: number;
  goals_scored: number;
  goals_conceded: number;
  corners: number;
  off_side: number;
  yellow_cards: number;
  red_cards: number;
  games: [];
}
