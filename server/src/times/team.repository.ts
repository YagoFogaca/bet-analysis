import { PrismaService } from '../database/database.service';
import { TimeEntity } from './entities/index.entities';

export class TeamRepository {
  constructor(private readonly prismaServe: PrismaService) {}

  async create(team: TimeEntity) {
    return await this.prismaServe.time.create({ data: team });
  }

  async findAll(): Promise<Omit<TimeEntity, 'games'>[]> {
    return await this.prismaServe.time.findMany();
  }

  async findByName(name: string): Promise<Omit<TimeEntity, 'games'>> {
    return await this.prismaServe.time.findFirst({ where: { name: name } });
  }
}
