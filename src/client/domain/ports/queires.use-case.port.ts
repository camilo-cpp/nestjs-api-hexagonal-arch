import { ClientEntity } from '@client-domain/entities/client.entity';

export interface GetClientByIdUseCasePort {
  execute(id: string): Promise<ClientEntity>;
}
