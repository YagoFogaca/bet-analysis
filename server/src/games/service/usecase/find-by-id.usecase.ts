import { IGamesEntity } from 'src/games/entities/index.entities';
import { GamesRepository } from '../games.repository';

export class GameFindById {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async execute(id: string): Promise<IGamesEntity> {
    const game = await this.gamesRepository.findById(id);
    if (!game) {
      throw new Error('Jogos não encontrado');
    }

    return game;
  }
}
