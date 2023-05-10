import { Injectable } from '@nestjs/common';
import { TeamRepository } from '../team.repository';

@Injectable()
export class TeamDeleteUsecase {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute(id: string): Promise<string> {
    try {
      await this.teamRepository.delete(id);
      return 'Time deletado';
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao deletar o time');
    }
  }
}
