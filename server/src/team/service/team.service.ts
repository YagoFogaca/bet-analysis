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

  async create(team: TeamCreateDto[]): Promise<string> {
    return await this.createUsecase.execute(team);
  }

  async findAll(): Promise<ITeamEntity[]> {
    return await this.findAllUsecase.execute();
  }

  async findByName(name: string): Promise<ITeamEntity> {
    return await this.findByNameUsecase.execute(name);
  }

  async delete(id: string): Promise<string> {
    return await this.deleteNameUsecase.execute(id);
  }
}
