import { Inject } from '@nestjs/common';

import { ClientEntity } from '@client-domain/entities/client.entity';
import { GET_CLIENT_BY_ID_REPOSITORY } from '@client-domain/constants/injections.constants';
import { GetClientByIdRepositoryPort } from '@client-domain/ports/queires.repository.port';
import { GetClientByIdServicePort } from '@client-domain/ports/queries-service.port';

export class GetClientByIdService implements GetClientByIdServicePort {
  constructor(
    @Inject(GET_CLIENT_BY_ID_REPOSITORY)
    private readonly getClientByIdRepository: GetClientByIdRepositoryPort,
  ) {}

  async execute(id: string): Promise<ClientEntity> {
    return await this.getClientByIdRepository.execute(id);
  }
}
