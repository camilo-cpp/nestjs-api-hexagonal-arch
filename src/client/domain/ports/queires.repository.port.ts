import { ClientEntity } from '@client-domain/entities/client.entity';

export interface GetClientByIdRepositoryPort {
  execute(id: string): Promise<ClientEntity>;
}

export interface UploadDataRepositoryPort {
  execute(): Promise<void>;
}
