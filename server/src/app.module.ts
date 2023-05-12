import { Module } from '@nestjs/common';
import { TeamsModule } from './team/team.module';
import { DatabaseModule } from './database/database.module';
import { GameModule } from './games/game.module';

@Module({
  imports: [DatabaseModule, TeamsModule, GameModule],
})
export class AppModule {}
