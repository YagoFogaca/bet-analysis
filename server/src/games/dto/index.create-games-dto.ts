import { ApiProperty } from '@nestjs/swagger';

export class GamesCreateDto {
  @ApiProperty({
    description: 'Data do jogo',
    type: String,
  })
  date: string;

  @ApiProperty({
    description: 'Rodada do jogo',
    type: Number,
  })
  round: number;

  @ApiProperty({
    description: 'Ganhador do jogo',
    type: String,
  })
  results: string;

  // Times do jogo
  @ApiProperty({
    description: 'Time mandante',
    type: String,
  })
  id_team_home: string;

  @ApiProperty({
    description: 'Time visitante',
    type: String,
  })
  id_team_visiting: string;

  // Escanteios do jogos
  @ApiProperty({
    description: 'Escanteio do time mandante',
    type: Number,
  })
  corners_home: number;

  @ApiProperty({
    description: 'Escanteio do time visitante',
    type: Number,
  })
  corners_visiting: number;

  // Gols do jogo
  @ApiProperty({
    description: 'Gols do time mandante',
    type: Number,
  })
  goals_home: number;

  @ApiProperty({
    description: 'Gols do time visitante',
    type: Number,
  })
  goals_visiting: number;

  // Cartões Ama do jogo
  @ApiProperty({
    description: 'Cartões amarelo do time mandante',
    type: Number,
  })
  yellow_cards_home: number;

  @ApiProperty({
    description: 'Cartões amarelo do time visitante',
    type: Number,
  })
  yellow_cards_visiting: number;

  // Cartões Verm do jogo
  @ApiProperty({
    description: 'Cartões vermelho do time mandante',
    type: Number,
  })
  red_cards_home: number;

  @ApiProperty({
    description: 'Cartões vermelho do time visitante',
    type: Number,
  })
  red_cards_visiting: number;

  // Empedimentos do jogo
  @ApiProperty({
    description: 'Empedimentos do time mandante',
    type: Number,
  })
  off_side_home: number;

  @ApiProperty({
    description: 'Empedimentos do time visitante',
    type: Number,
  })
  off_side_visiting: number;
}
