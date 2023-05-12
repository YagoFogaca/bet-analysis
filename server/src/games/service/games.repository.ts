import { Injectable } from '@nestjs/common';
import { IGamesEntity } from '../entities/index.entities';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class GamesRepository {
  constructor(private readonly prismaServe: PrismaService) {}

  async create(game: IGamesEntity): Promise<IGamesEntity> {
    return await this.prismaServe.games.create({ data: game });
  }

  async findAllTeams(id_team: string): Promise<IGamesEntity[]> {
    return await this.prismaServe.games.findMany({
      where: {
        OR: [{ id_team_home: id_team }, { id_team_visiting: id_team }],
      },
    });
  }

  async findById(id: string): Promise<IGamesEntity> {
    return await this.prismaServe.games.findUnique({ where: { id: id } });
  }

  async delete(id: string): Promise<IGamesEntity> {
    return await this.prismaServe.games.delete({ where: { id: id } });
  }
}
