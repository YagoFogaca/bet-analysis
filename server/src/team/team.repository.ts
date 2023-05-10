import { PrismaService } from '../database/database.service';
import { ITeamEntity } from './entities/index.entities';

export class TeamRepository {
  constructor(private readonly prismaServe: PrismaService) {}

  async create(team: ITeamEntity) {
    return await this.prismaServe.time.create({ data: team });
  }

  async findAll(): Promise<Omit<ITeamEntity, 'games'>[]> {
    return await this.prismaServe.time.findMany();
  }

  async findByName(name: string): Promise<Omit<ITeamEntity, 'games'>> {
    return await this.prismaServe.time.findFirst({ where: { name: name } });
  }
}
