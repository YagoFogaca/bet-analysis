import { GamesCreateDto } from 'src/games/dto/index.create-games-dto';
import { GamesRepository } from '../games.repository';
import { GameValidator } from 'src/games/validator/index.validator';
import { TeamRepository } from 'src/team/service/team.repository';

export class GamesCreateUsecase {
  constructor(
    private readonly gamesRepository: GamesRepository,
    private readonly teamRepository: TeamRepository,
  ) {}

  async execute(game: GamesCreateDto): Promise<string> {
    // Verificar os dois id's
    const team_home = await this.teamRepository.findById(game.id_team_home);
    const team_visiting = await this.teamRepository.findById(
      game.id_team_visiting,
    );
    if (!team_home || !team_visiting) {
      throw new Error('Time não encontrado');
    }

    const gameValidator = new GameValidator(game);
    const gameCreated = await this.gamesRepository.create(
      gameValidator.returnTime(),
    );
    if (!gameCreated) {
      throw new Error('Ocorreu um erro ao criar o jogo');
    }

    return 'Jogo criado com sucesso';
  }
}
