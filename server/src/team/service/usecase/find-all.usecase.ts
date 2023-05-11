import { TeamRepository } from 'src/team/service/team.repository';
import { ITeamEntity } from 'src/team/entities/index.entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamFindAllUsecase {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute(): Promise<ITeamEntity[]> {
    return await this.teamRepository.findAll();
  }
}
