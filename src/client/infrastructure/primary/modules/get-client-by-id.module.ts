import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  ClientModel,
  ClientSchema,
} from '@client-infrastructure/secondary/models/client.model';
import {
  GET_CLIENT_BY_ID_REPOSITORY,
  GET_CLIENT_BY_ID_SERVICE,
  GET_CLIENT_BY_ID_USE_CASE,
} from '@client-domain/constants/injections.constants';
import { GetClientByIdController } from '@client-infrastructure/primary/controllers/get-client-by-id.controller';
import { GetClientByIdRepository } from '@client-infrastructure/secondary/repositories/get-client-by-id.repository';
import { GetClientByIdService } from '@client-domain/services/get-client-by-id.service';
import { GetClientByIdUseCase } from '@client-application/get-client-by-id.use-case';
import { RedisCacheConfig } from 'src/config/cache';

@Module({
  controllers: [GetClientByIdController],
  imports: [
    CacheModule.registerAsync(RedisCacheConfig),
    MongooseModule.forFeature([
      { name: ClientModel.name, schema: ClientSchema },
    ]),
  ],
  providers: [
    /**
     * Infrastructure layer
     */
    {
      provide: GET_CLIENT_BY_ID_REPOSITORY,
      useClass: GetClientByIdRepository,
    },
    /**
     * Application layer
     */
    {
      provide: GET_CLIENT_BY_ID_USE_CASE,
      useClass: GetClientByIdUseCase,
    },
    /**
     * Domain layer
     */
    {
      provide: GET_CLIENT_BY_ID_SERVICE,
      useClass: GetClientByIdService,
    },
  ],
})
export class GetClientByIdModule {}
