import { Injectable } from '@nestjs/common';
import { TeamCreateDto } from 'src/team/dto/index.create-time-dto';
import { ITeamEntity } from 'src/team/entities/index.entities';
import { TeamRepository } from 'src/team/service/team.repository';
import { TeamValidator } from 'src/team/validator/index.validator';

@Injectable()
export class TeamCreateUsecase {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute(team: TeamCreateDto): Promise<Omit<ITeamEntity, 'games'>> {
    const validateName = await this.teamRepository.findByName(team.name);
    if (validateName) {
      throw new Error('Time já registrado');
    }

    const teamValidator = new TeamValidator(team);
    return await this.teamRepository.create(teamValidator.returnTime());
  }
}
