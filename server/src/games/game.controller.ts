import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GameService } from './service/games.service';
import { GamesCreateDto } from './dto/index.create-games-dto';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GameService) {}

  @Post('/')
  async create(@Body() game: GamesCreateDto) {
    try {
      return await this.gameService.create(game);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    try {
      return await this.gameService.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    try {
      return await this.gameService.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
