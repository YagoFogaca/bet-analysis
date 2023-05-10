import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';
import { ITeamEntity } from '../entities/index.entities';

@Injectable()
export class TeamRepository {
  constructor(private readonly prismaServe: PrismaService) {}

  async create(team: Omit<ITeamEntity, 'games'>[]) {
    return await this.prismaServe.team.createMany({ data: team });
  }

  async findAll(): Promise<Omit<ITeamEntity, 'games'>[]> {
    return await this.prismaServe.team.findMany();
  }

  async findByName(name: string): Promise<Omit<ITeamEntity, 'games'>> {
    return await this.prismaServe.team.findFirst({ where: { name: name } });
  }

  async delete(id: string): Promise<Omit<ITeamEntity, 'games'>> {
    return await this.prismaServe.team.delete({ where: { id: id } });
  }
}
