import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  ClientModel,
  ClientSchema,
} from '@client-infrastructure/secondary/models/client.model';
import { UploadDataRepository } from '@client-infrastructure/secondary/repositories/upload-data.repository';
import { UPLOAD_DATA_REPOSITORY } from '@client-domain/constants/injections.constants';

@Module({
  imports: [
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
export class UploadDataModule {}
