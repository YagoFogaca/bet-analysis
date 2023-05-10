import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TeamRepository } from './service/team.repository';
import { TeamCreateUsecase } from './service/usecase/create.usecase';
import { TeamFindAllUsecase } from './service/usecase/find-all.usecase';
import { TeamFindByNameUsecase } from './service/usecase/find-by-name.usecase';
import { TeamDeleteUsecase } from './service/usecase/delete.usecase';
import { TeamService } from './service/team.service';
import { TeamController } from './team.controller';

@Module({
  controllers: [TeamController],
  imports: [DatabaseModule],
  providers: [
    TeamRepository,
    TeamCreateUsecase,
    TeamFindAllUsecase,
    TeamFindByNameUsecase,
    TeamDeleteUsecase,
    TeamService,
  ],
})
export class TeamsModule {}
