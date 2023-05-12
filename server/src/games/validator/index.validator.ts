import { GamesCreateDto } from '../dto/index.create-games-dto';

export class GameValidator {
  private id: string;
  private date: string;
  private round: number;
  private results: string;
  private id_team_home: string;
  private id_team_visiting: string;
  private corners_home: number;
  private corners_visiting: number;
  private goals_home: number;
  private goals_visiting: number;
  private yellow_cards_home: number;
  private yellow_cards_visiting: number;
  private red_cards_home: number;
  private red_cards_visiting: number;
  private off_side_home: number;
  private off_side_visiting: number;

  constructor({
    date,
    round,
    results,
    id_team_home,
    id_team_visiting,
    corners_home,
    corners_visiting,
    goals_home,
    goals_visiting,
    yellow_cards_home,
    yellow_cards_visiting,
    red_cards_home,
    red_cards_visiting,
    off_side_home,
    off_side_visiting,
  }: GamesCreateDto) {
    this.date = date;
    this.round = round;
    this.results = results;
    this.id_team_home = id_team_home;
    this.id_team_visiting = id_team_visiting;
    this.corners_home = corners_home;
    this.corners_visiting = corners_visiting;
    this.goals_home = goals_home;
    this.goals_visiting = goals_visiting;
    this.yellow_cards_home = yellow_cards_home;
    this.yellow_cards_visiting = yellow_cards_visiting;
    this.red_cards_home = red_cards_home;
    this.red_cards_visiting = red_cards_visiting;
    this.off_side_home = off_side_home;
    this.off_side_visiting = off_side_visiting;
  }

  generateId() {
    this.id = `${this.id_team_home}-${this.id_team_visiting}-${this.date}`;
  }

  returnTime() {
    this.generateId();
    return {
      id: this.id,
      date: this.date,
      round: this.round,
      results: this.results,
      id_team_home: this.id_team_home,
      id_team_visiting: this.id_team_visiting,
      corners_home: this.corners_home,
      corners_visiting: this.corners_visiting,
      goals_home: this.goals_home,
      goals_visiting: this.goals_visiting,
      yellow_cards_home: this.yellow_cards_home,
      yellow_cards_visiting: this.yellow_cards_visiting,
      red_cards_home: this.red_cards_home,
      red_cards_visiting: this.red_cards_visiting,
      off_side_home: this.off_side_home,
      off_side_visiting: this.off_side_visiting,
    };
  }
}
