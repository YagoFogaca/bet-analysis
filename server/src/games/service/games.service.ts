import { Injectable } from '@nestjs/common';
import { GamesCreateUsecase } from './usecase/create.usecase';
import { GameFindById } from './usecase/find-by-id.usecase';
import { GameDeleteUsecase } from './usecase/delete.usecase';
import { IGamesEntity } from '../entities/index.entities';
import { GamesCreateDto } from '../dto/index.create-games-dto';

@Injectable()
export class GameService {
  constructor(
    private readonly createUsecase: GamesCreateUsecase,
    private readonly findByIdUsecase: GameFindById,
    private readonly deleteUsecase: GameDeleteUsecase,
  ) {}

  async create(game: GamesCreateDto): Promise<string> {
    return await this.createUsecase.execute(game);
  }

  async findById(id: string): Promise<IGamesEntity> {
    return await this.findByIdUsecase.execute(id);
  }

  async delete(id: string): Promise<string> {
    return await this.deleteUsecase.execute(id);
  }
}
