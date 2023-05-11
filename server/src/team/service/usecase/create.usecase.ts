import { Injectable } from '@nestjs/common';
import { TeamCreateDto } from '../../dto/index.create-time-dto';
import { TeamRepository } from 'src/team/service/team.repository';
import { TeamValidator } from '../../validator/index.validator';

@Injectable()
export class TeamCreateUsecase {
  constructor(private readonly teamRepository: TeamRepository) {}

  async execute(teams: TeamCreateDto[]): Promise<string> {
    const teamsValidate = await Promise.all(
      teams.map(async (team) => {
        const validateName = await this.teamRepository.findByName(
          team.name.toLowerCase(),
        );
        if (validateName) {
          throw new Error('Time já registrado');
        }
        const teamValidator = new TeamValidator(team);
        return teamValidator.returnTime();
      }),
    );

    const teamsCreated = await this.teamRepository.create(teamsValidate);
    if (!teamsCreated) {
      throw new Error('Ocorreu um erro ao criar os times');
    }

    return 'Times criados com sucesso';
  }
}
