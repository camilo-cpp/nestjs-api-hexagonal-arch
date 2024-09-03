import { Controller, Get, Inject, Param } from '@nestjs/common';

import { GET_CLIENT_BY_ID_USE_CASE } from '@client-domain/constants/injections.constants';
import { GetClientByIdUseCasePort } from '@client-domain/ports/queires.use-case.port';

@Controller('client')
export class GetClientByIdController {
  constructor(
    @Inject(GET_CLIENT_BY_ID_USE_CASE)
    private readonly getClientByIdUseCase: GetClientByIdUseCasePort,
  ) {}

  @Get(':id')
  async getClientById(@Param('id') id: string) {
    const client = await this.getClientByIdUseCase.execute(id);
    return {
      code: 200,
      message: 'Client obtained successfully',
      data: client,
    };
  }
}
