import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';
import { ITeamEntity } from '../entities/index.entities';

@Injectable()
export class TeamRepository {
  config: { games_home: true; games_visiting: true };
  constructor(private readonly prismaServe: PrismaService) {}

  async create(team: Omit<ITeamEntity, 'games_home' | 'games_visiting'>[]) {
    return await this.prismaServe.team.createMany({ data: team });
  }

  async findAll(): Promise<
    Omit<ITeamEntity, 'games_home' | 'games_visiting'>[]
  > {
    return await this.prismaServe.team.findMany();
  }

  async findByName(name: string): Promise<ITeamEntity> {
    return await this.prismaServe.team.findFirst({
      where: { name: name },
      include: { games_home: true, games_visiting: true },
    });
  }

  async findById(id: string): Promise<ITeamEntity> {
    return await this.prismaServe.team.findUnique({
      where: { id: id },
      include: { games_home: true, games_visiting: true },
    });
  }

  async delete(id: string): Promise<ITeamEntity> {
    return await this.prismaServe.team.delete({
      where: { id: id },
      include: { games_home: true, games_visiting: true },
    });
  }
}
