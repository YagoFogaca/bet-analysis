import { Module } from '@nestjs/common';
import { TeamsModule } from './team/team.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TeamsModule],
})
export class AppModule {}
