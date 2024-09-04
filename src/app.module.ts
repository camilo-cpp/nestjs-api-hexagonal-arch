import { ConfigModule, ConfigService } from '@nestjs/config';
import { Inject, Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientModule } from './client/infrastructure/primary/modules/client.module';
import {
  ClientModel,
  ClientSchema,
} from '@client-infrastructure/secondary/models/client.model';
import { UPLOAD_DATA_REPOSITORY } from '@client-domain/constants/injections.constants';
import { UploadDataRepositoryPort } from '@client-domain/ports/queires.repository.port';
import { UploadDataRepository } from '@client-infrastructure/secondary/repositories/upload-data.repository';
import { ValidatorEnv } from './config/validators.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ValidatorEnv,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_DB_HOST')}:${configService.get('MONGO_DB_PORT')}/${configService.get('MONGO_DB_DATABASE')}`,
      }),
      inject: [ConfigService],
    }),
    ClientModule,
    MongooseModule.forFeature([
      { name: ClientModel.name, schema: ClientSchema },
    ]),
  ],
  providers: [
    {
      provide: UPLOAD_DATA_REPOSITORY,
      useClass: UploadDataRepository,
    },
  ],
})
export class AppModule implements OnModuleInit {
  constructor(
    @Inject(UPLOAD_DATA_REPOSITORY)
    private readonly uploadDataRepository: UploadDataRepositoryPort,
  ) {}

  async onModuleInit() {
    await this.uploadDataRepository.execute();
  }
}
