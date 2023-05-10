import { Injectable } from '@nestjs/common';
import { ITeamEntity } from '../entities/index.entities';
import { TeamCreateUsecase } from './usecase/create.usecase';
import { TeamFindAllUsecase } from './usecase/find-all.usecase';
import { TeamFindByNameUsecase } from './usecase/find-by-name.usecase';
import { TeamCreateDto } from '../dto/index.create-time-dto';
import { TeamDeleteUsecase } from './usecase/delete.usecase';

@Injectable()
export class TeamService {
  constructor(
    private readonly createUsecase: TeamCreateUsecase,
    private readonly findAllUsecase: TeamFindAllUsecase,
    private readonly findByNameUsecase: TeamFindByNameUsecase,
    private readonly deleteNameUsecase: TeamDeleteUsecase,
  ) {}

  async create(team: TeamCreateDto) {
    return await this.createUsecase.execute(team);
  }

  async findAll(): Promise<Omit<ITeamEntity, 'games'>[]> {
    return await this.findAllUsecase.execute();
  }

  async findByName(name: string): Promise<Omit<ITeamEntity, 'games'>> {
    return await this.findByNameUsecase.execute(name);
  }

  async delete(id: string): Promise<string> {
    return await this.deleteNameUsecase.execute(id);
  }
}
