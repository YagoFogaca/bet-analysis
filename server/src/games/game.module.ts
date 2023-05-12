import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TeamsModule } from 'src/team/team.module';
import { GamesController } from './game.controller';
import { GamesRepository } from './service/games.repository';
import { GameService } from './service/games.service';
import { GameFindById } from './service/usecase/find-by-id.usecase';
import { GameDeleteUsecase } from './service/usecase/delete.usecase';
import { GamesCreateUsecase } from './service/usecase/create.usecase';

@Module({
  controllers: [GamesController],
  imports: [DatabaseModule, TeamsModule],
  providers: [
    GamesRepository,
    GamesCreateUsecase,
    GameFindById,
    GameDeleteUsecase,
    GameService,
  ],
})
export class GameModule {}
