import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { TeamService } from './service/team.service';
import { TeamCreateDto } from './dto/index.create-time-dto';

@ApiTags('teams')
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/')
  async create(@Body() team: TeamCreateDto) {
    try {
      return await this.teamService.create(team);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Ocorreu um erro ao criar o time',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/')
  async findAll() {
    try {
      return await this.teamService.findAll();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Ocorreu um erro ao buscar os times',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('/:name')
  async findByName(@Param('name') name: string) {
    try {
      return await this.teamService.findByName(name);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Ocorreu um erro ao buscar o time',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    try {
      return await this.teamService.delete(id);
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Ocorreu um erro ao deletar o time',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
