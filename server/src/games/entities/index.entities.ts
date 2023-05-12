export class IGamesEntity {
  id: string;
  date: string;
  round: number;
  results: string;
  id_team_home: string;
  id_team_visiting: string;
  corners_home: number;
  corners_visiting: number;
  goals_home: number;
  goals_visiting: number;
  yellow_cards_home: number;
  yellow_cards_visiting: number;
  red_cards_home: number;
  red_cards_visiting: number;
  off_side_home: number;
  off_side_visiting: number;
}
