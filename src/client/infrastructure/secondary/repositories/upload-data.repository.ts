import { HttpException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { UploadDataRepositoryPort } from '@client-domain/ports/queires.repository.port';
import { ClientModel } from '@client-infrastructure/secondary/models/client.model';
import * as data from '@client-infrastructure/secondary/data/data_client.json';

export class UploadDataRepository implements UploadDataRepositoryPort {
  constructor(
    @InjectModel(ClientModel.name)
    private readonly clientModel: Model<ClientModel>,
  ) {}

  async execute(): Promise<void> {
    try {
      const existingClients = await this.clientModel.countDocuments().exec();
      if (existingClients > 0) {
        console.log('Seed data already exists, skipping...😜');
        return;
      }

      await this.clientModel.insertMany(data);

      Logger.log('Data uploaded successfully 🤘🚀');
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
