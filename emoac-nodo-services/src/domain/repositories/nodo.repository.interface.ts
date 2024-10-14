import { Nodo } from '../entities/nodo.entity';

export interface NodoRepository {
  findAll: () => Promise<Nodo[]>;
}