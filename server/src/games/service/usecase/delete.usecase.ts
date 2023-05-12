import { Injectable } from '@nestjs/common';
import { GamesRepository } from '../games.repository';

@Injectable()
export class GameDeleteUsecase {
  constructor(private readonly gamesRepository: GamesRepository) {}

  async execute(id: string): Promise<string> {
    try {
      await this.gamesRepository.delete(id);
      return 'Jogo deletado';
    } catch (error) {
      throw new Error('Erro ao deletar o jogo');
    }
  }
}
