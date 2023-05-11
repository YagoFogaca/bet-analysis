import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';
import { ITeamEntity } from '../entities/index.entities';

@Injectable()
export class TeamRepository {
  includes: { games_home: true; games_visiting: true };
  constructor(private readonly prismaServe: PrismaService) {}

  async create(team: Omit<ITeamEntity, 'games_home' | 'games_visiting'>[]) {
    console.log(team);
    return await this.prismaServe.team.createMany({ data: team });
  }

  async findAll(): Promise<ITeamEntity[]> {
    return await this.prismaServe.team.findMany({
      include: this.includes,
    });
  }

  async findByName(name: string): Promise<ITeamEntity> {
    return await this.prismaServe.team.findFirst({
      where: { name: name },
      include: this.includes,
    });
  }

  async delete(id: string): Promise<ITeamEntity> {
    return await this.prismaServe.team.delete({
      where: { id: id },
      include: this.includes,
    });
  }
}
