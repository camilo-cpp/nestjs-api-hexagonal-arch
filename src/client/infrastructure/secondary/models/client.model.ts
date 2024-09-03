import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<ClientModel>;

@Schema({
  collection: 'client',
  versionKey: false,
})
export class ClientModel {
  @Prop()
  address: string;

  @Prop()
  blocked: string;

  @Prop()
  cellPhone: string;

  @Prop()
  channel: string;

  @Prop()
  clientId: string;

  @Prop()
  country: string;

  @Prop({ type: Object })
  customerGroup: {
    group: string;
    group1: string;
    group2: string;
    group3: string;
    group4: string;
    group5: string;
  };

  @Prop()
  customerSchema: number;

  @Prop()
  distrChan: string;

  @Prop()
  division: string;

  @Prop()
  fiscalCode1: string;

  @Prop()
  fiscalCode2: string;

  @Prop()
  frequency: boolean;

  @Prop()
  frequencyDays: string;

  @Prop()
  idPortfolio: string;

  @Prop()
  immediateDelivery: boolean;

  @Prop()
  industryCode: string;

  @Prop()
  industryCode1: string;

  @Prop()
  isEnrollment: boolean;

  @Prop()
  name: string;

  @Prop()
  name2: string;

  @Prop()
  office: string;

  @Prop()
  paymentCondition: string;

  @Prop({ type: [{ type: Object }] })
  paymentMethods: {
    clientId: string;
    typeCredit: string;
    creditLimit: number;
    creditUsed: number;
    amountAvailable: number;
  }[];

  @Prop()
  priceGroup: number;

  @Prop()
  priceList: number;

  @Prop()
  routeId: string;

  @Prop()
  salesOrg: string;

  @Prop()
  supplyCenter: string;

  @Prop({ type: Date })
  updateDate: Date;

  @Prop()
  vendorGroup: string;
}

export const ClientSchema = SchemaFactory.createForClass(ClientModel);
