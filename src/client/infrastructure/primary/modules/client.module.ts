import { Module } from '@nestjs/common';

import { GetClientByIdModule } from './get-client-by-id.module';
import { UploadDataModule } from './upload-data.module';

@Module({
  imports: [GetClientByIdModule, UploadDataModule],
})
export class ClientModule {}
