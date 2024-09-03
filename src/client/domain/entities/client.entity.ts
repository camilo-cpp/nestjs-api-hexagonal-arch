export interface ClientProps {
  id: string;
  address: string;
  blocked: string;
  cellPhone: string;
  channel: string;
  clientId: string;
  country: string;
  customerGroup: {
    group: string;
    group1: string;
    group2: string;
    group3: string;
    group4: string;
    group5: string;
  };
  customerSchema: number;
  distrChan: string;
  division: string;
  fiscalCode1: string;
  fiscalCode2: string;
  frequency: boolean;
  frequencyDays: string;
  idPortfolio: string;
  immediateDelivery: boolean;
  industryCode: string;
  industryCode1: string;
  isEnrollment: boolean;
  name: string;
  name2: string;
  office: string;
  paymentCondition: string;
  paymentMethods: {
    clientId: string;
    typeCredit: string;
    creditLimit: number;
    creditUsed: number;
    amountAvailable: number;
  }[];
  priceGroup: number;
  priceList: number;
  routeId: string;
  salesOrg: string;
  supplyCenter: string;
  updateDate: Date;
  vendorGroup: string;
}

/* -----------------------------------------------------------------------------
 * Here you can manipulate the data that comes from the database, for example,
 * you can change the format of the data, or add new properties. All the data
 * manipulation like validate required, types, length, etc, should be done in
 *
 * In this case for example, we are not manipulating the data.
 * ----------------------------------------------------------------------------- */
export class ClientEntity {
  private readonly _id: string; // You can add validators here (For strings, booleans, numbers, etc)
  private readonly _address: string;
  private readonly _blocked: string;
  private readonly _cellPhone: string;
  private readonly _channel: string;
  private readonly _clientId: string;
  private readonly _country: string;
  private readonly _customerGroup: {
    group: string;
    group1: string;
    group2: string;
    group3: string;
    group4: string;
    group5: string;
  };
  private readonly _customerSchema: number;
  private readonly _distrChan: string;
  private readonly _division: string;
  private readonly _fiscalCode1: string;
  private readonly _fiscalCode2: string;
  private readonly _frequency: boolean;
  private readonly _frequencyDays: string;
  private readonly _idPortfolio: string;
  private readonly _immediateDelivery: boolean;
  private readonly _industryCode: string;
  private readonly _industryCode1: string;
  private readonly _isEnrollment: boolean;
  private readonly _name: string;
  private readonly _name2: string;
  private readonly _office: string;
  private readonly _paymentCondition: string;
  private readonly _paymentMethods: {
    clientId: string;
    typeCredit: string;
    creditLimit: number;
    creditUsed: number;
    amountAvailable: number;
  }[];
  private readonly _priceGroup: number;
  private readonly _priceList: number;
  private readonly _routeId: string;
  private readonly _salesOrg: string;
  private readonly _supplyCenter: string;
  private readonly _updateDate: Date;
  private readonly _vendorGroup: string;

  constructor(props: ClientProps) {
    this._id = props.id;
    this._address = props.address;
    this._blocked = props.blocked;
    this._cellPhone = props.cellPhone;
    this._channel = props.channel;
    this._clientId = props.clientId;
    this._country = props.country;
    this._customerGroup = props.customerGroup;
    this._customerSchema = props.customerSchema;
    this._distrChan = props.distrChan;
    this._division = props.division;
    this._fiscalCode1 = props.fiscalCode1;
    this._fiscalCode2 = props.fiscalCode2;
    this._frequency = props.frequency;
    this._frequencyDays = props.frequencyDays;
    this._idPortfolio = props.idPortfolio;
    this._immediateDelivery = props.immediateDelivery;
    this._industryCode = props.industryCode;
    this._industryCode1 = props.industryCode1;
    this._isEnrollment = props.isEnrollment;
    this._name = props.name;
    this._name2 = props.name2;
    this._office = props.office;
    this._paymentCondition = props.paymentCondition;
    this._paymentMethods = props.paymentMethods;
    this._priceGroup = props.priceGroup;
    this._priceList = props.priceList;
    this._routeId = props.routeId;
    this._salesOrg = props.salesOrg;
    this._supplyCenter = props.supplyCenter;
    this._updateDate = props.updateDate;
    this._vendorGroup = props.vendorGroup;
  }

  static init(props: ClientProps): ClientEntity {
    return new ClientEntity(props);
  }

  /* -----------------------------------------------------------------------------
   * Here you map the data to return it in the format you want.
   * ----------------------------------------------------------------------------- */
  public toJSON(): ClientProps {
    return {
      id: this.id,
      address: this.address,
      blocked: this.blocked,
      cellPhone: this.cellPhone,
      channel: this.channel,
      clientId: this.clientId,
      country: this.country,
      customerGroup: this.customerGroup,
      customerSchema: this.customerSchema,
      distrChan: this.distrChan,
      division: this.division,
      fiscalCode1: this.fiscalCode1,
      fiscalCode2: this.fiscalCode2,
      frequency: this.frequency,
      frequencyDays: this.frequencyDays,
      idPortfolio: this.idPortfolio,
      immediateDelivery: this.immediateDelivery,
      industryCode: this.industryCode,
      industryCode1: this.industryCode1,
      isEnrollment: this.isEnrollment,
      name: this.name,
      name2: this.name2,
      office: this.office,
      paymentCondition: this.paymentCondition,
      paymentMethods: this.paymentMethods,
      priceGroup: this.priceGroup,
      priceList: this.priceList,
      routeId: this.routeId,
      salesOrg: this.salesOrg,
      supplyCenter: this.supplyCenter,
      updateDate: new Date(this.updateDate),
      vendorGroup: this.vendorGroup,
    };
  }

  get id(): string {
    return this._id;
  }

  get address(): string {
    return this._address;
  }

  get blocked(): string {
    return this._blocked;
  }

  get cellPhone(): string {
    return this._cellPhone;
  }

  get channel(): string {
    return this._channel;
  }

  get clientId(): string {
    return this._clientId;
  }

  get country(): string {
    return this._country;
  }

  get customerGroup(): {
    group: string;
    group1: string;
    group2: string;
    group3: string;
    group4: string;
    group5: string;
  } {
    return this._customerGroup;
  }

  get customerSchema(): number {
    return this._customerSchema;
  }

  get distrChan(): string {
    return this._distrChan;
  }

  get division(): string {
    return this._division;
  }

  get fiscalCode1(): string {
    return this._fiscalCode1;
  }

  get fiscalCode2(): string {
    return this._fiscalCode2;
  }

  get frequency(): boolean {
    return this._frequency;
  }

  get frequencyDays(): string {
    return this._frequencyDays;
  }

  get idPortfolio(): string {
    return this._idPortfolio;
  }

  get immediateDelivery(): boolean {
    return this._immediateDelivery;
  }

  get industryCode(): string {
    return this._industryCode;
  }

  get industryCode1(): string {
    return this._industryCode1;
  }

  get isEnrollment(): boolean {
    return this._isEnrollment;
  }

  get name(): string {
    return this._name;
  }

  get name2(): string {
    return this._name2;
  }

  get office(): string {
    return this._office;
  }

  get paymentCondition(): string {
    return this._paymentCondition;
  }

  get paymentMethods(): {
    clientId: string;
    typeCredit: string;
    creditLimit: number;
    creditUsed: number;
    amountAvailable: number;
  }[] {
    return this._paymentMethods;
  }

  get priceGroup(): number {
    return this._priceGroup;
  }

  get priceList(): number {
    return this._priceList;
  }

  get routeId(): string {
    return this._routeId;
  }

  get salesOrg(): string {
    return this._salesOrg;
  }

  get supplyCenter(): string {
    return this._supplyCenter;
  }

  get updateDate(): Date {
    return this._updateDate;
  }

  get vendorGroup(): string {
    return this._vendorGroup;
  }
}
