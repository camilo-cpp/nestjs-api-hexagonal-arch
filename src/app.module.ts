import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
