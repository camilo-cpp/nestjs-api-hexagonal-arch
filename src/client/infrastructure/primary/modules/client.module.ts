import { Module } from '@nestjs/common';

import { GetClientByIdModule } from './get-client-by-id.module';

@Module({
  imports: [GetClientByIdModule],
})
export class ClientModule {}
