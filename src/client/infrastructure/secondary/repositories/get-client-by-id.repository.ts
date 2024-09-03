import { HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ClientEntity } from '@client-domain/entities/client.entity';
import { ClientModel } from '@client-infrastructure/secondary/models/client.model';
import { GetClientByIdRepositoryPort } from '@client-domain/ports/queires.repository.port';

export class GetClientByIdRepository implements GetClientByIdRepositoryPort {
  constructor(
    @InjectModel(ClientModel.name)
    private readonly clientModel: Model<ClientModel>,
  ) {}

  async execute(id: string): Promise<ClientEntity> {
    try {
      const dataClient = await this.clientModel.findOne({ clientId: id });

      if (!dataClient) {
        throw new HttpException('Client not found', 404);
      }

      const clientEntity = ClientEntity.init({
        id: dataClient.clientId,
        address: dataClient.address,
        blocked: dataClient.blocked,
        cellPhone: dataClient.cellPhone,
        channel: dataClient.channel,
        clientId: dataClient.clientId,
        country: dataClient.country,
        customerGroup: dataClient.customerGroup,
        customerSchema: dataClient.customerSchema,
        distrChan: dataClient.distrChan,
        division: dataClient.division,
        fiscalCode1: dataClient.fiscalCode1,
        fiscalCode2: dataClient.fiscalCode2,
        frequency: dataClient.frequency,
        frequencyDays: dataClient.frequencyDays,
        idPortfolio: dataClient.idPortfolio,
        immediateDelivery: dataClient.immediateDelivery,
        industryCode: dataClient.industryCode,
        industryCode1: dataClient.industryCode1,
        isEnrollment: dataClient.isEnrollment,
        name: dataClient.name,
        name2: dataClient.name2,
        office: dataClient.office,
        paymentCondition: dataClient.paymentCondition,
        paymentMethods: dataClient.paymentMethods,
        priceGroup: dataClient.priceGroup,
        priceList: dataClient.priceList,
        routeId: dataClient.routeId,
        salesOrg: dataClient.salesOrg,
        supplyCenter: dataClient.supplyCenter,
        updateDate: dataClient.updateDate,
        vendorGroup: dataClient.vendorGroup,
      });

      return clientEntity;
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
