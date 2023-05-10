import { Injectable } from '@nestjs/common';
import { ITeamEntity } from '../entities/index.entities';
import { TeamCreateUsecase } from './usecase/create.usecase';
import { TeamFindAllUsecase } from './usecase/find-all.usecase';
import { TeamFindByNameUsecase } from './usecase/find-by-name.usecase';
import { TeamCreateDto } from '../dto/index.create-time-dto';

@Injectable()
export class TeamService {
  constructor(
    private readonly teamCreateUsecase: TeamCreateUsecase,
    private readonly teamFindAllUsecase: TeamFindAllUsecase,
    private readonly teamFindByNameUsecase: TeamFindByNameUsecase,
  ) {}

  async create(team: TeamCreateDto) {
    return await this.teamCreateUsecase.execute(team);
  }

  async findAll(): Promise<Omit<ITeamEntity, 'games'>[]> {
    return await this.teamFindAllUsecase.execute();
  }

  async findByName(name: string): Promise<Omit<ITeamEntity, 'games'>> {
    return await this.teamFindByNameUsecase.execute(name);
  }
}
