import { Inject } from '@nestjs/common';

import { ClientEntity } from '@client-domain/entities/client.entity';
import { GET_CLIENT_BY_ID_SERVICE } from '@client-domain/constants/injections.constants';
import { GetClientByIdServicePort } from '@client-domain/ports/queries-service.port';
import { GetClientByIdUseCasePort } from '@client-domain/ports/queires.use-case.port';

export class GetClientByIdUseCase implements GetClientByIdUseCasePort {
  constructor(
    @Inject(GET_CLIENT_BY_ID_SERVICE)
    private readonly getClientByIdService: GetClientByIdServicePort,
  ) {}

  async execute(id: string): Promise<ClientEntity> {
    return await this.getClientByIdService.execute(id);
  }
}
