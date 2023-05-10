import { TeamRepository } from 'src/team/service/team.repository';
import { ITeamEntity } from 'src/team/entities/index.entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamFindByNameUsecase {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute(name: string): Promise<Omit<ITeamEntity, 'games'>> {
    const team = await this.teamRepository.findByName(name);
    if (!team) {
      throw new Error('Time não registrado');
    }

    return team;
  }
}
