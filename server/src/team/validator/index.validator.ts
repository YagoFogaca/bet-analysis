import { randomUUID } from 'crypto';
import { TeamCreateDto } from '../dto/index.create-time-dto';

export class TeamValidator {
  private id: string;
  private name: string;
  private points: number = 0;
  private victory: number = 0;
  private defeat: number = 0;
  private draw: number = 0;
  private goals_scored: number = 0;
  private goals_conceded: number = 0;
  private corners: number = 0;
  private off_side: number = 0;
  private yellow_cards: number = 0;
  private red_cards: number = 0;

  constructor({ name }: TeamCreateDto) {
    this.name = name.toUpperCase();
  }

  private validateName() {
    if (this.name.length <= 3) {
      throw new Error('Nome inválido');
    }
  }

  private generateId() {
    const name = this.name.substring(0, 3).toUpperCase();
    const idNumber = randomUUID().substring(0, 5).toUpperCase();
    this.id = `${name}-${idNumber}`;
  }

  returnTime() {
    this.validateName();
    this.generateId();
    return {
      id: this.id,
      name: this.name,
      points: this.points,
      victory: this.victory,
      defeat: this.defeat,
      draw: this.draw,
      goals_scored: this.goals_scored,
      goals_conceded: this.goals_conceded,
      corners: this.corners,
      off_side: this.off_side,
      yellow_cards: this.yellow_cards,
      red_cards: this.red_cards,
    };
  }
}
