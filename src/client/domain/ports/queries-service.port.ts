import { ClientEntity } from '@client-domain/entities/client.entity';

export interface GetClientByIdServicePort {
  execute(id: string): Promise<ClientEntity>;
}
