import { ApiProperty } from '@nestjs/swagger';

export class TeamCreateDto {
  @ApiProperty({
    description: 'Nome do time',
    type: String,
  })
  name: string;
}
