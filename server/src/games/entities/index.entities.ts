export class IGamesEntity {
  id: String;
  // Infos do jogo:
  date: string;
  round: number;
  results: string;

  // Times do jogo
  id_team_home: string;
  id_team_visiting: string;

  // Escanteios do jogos
  corners_home: number;
  corners_visiting: number;

  // Gols do jogo
  goals_home: number;
  goals_visiting: number;

  // Cartões Ama do jogo
  yellow_cards_home: number;
  yellow_cards_visiting: number;

  // Cartões Verm do jogo
  red_cards_home: number;
  red_cards_visiting: number;

  // Empedimentos do jogo
  off_side_home: number;
  off_side_visiting: number;
}
