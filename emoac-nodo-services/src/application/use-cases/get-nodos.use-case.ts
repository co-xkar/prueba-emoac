import { Injectable } from '@nestjs/common';
import { NodoService } from '../services/nodo.service';
import { getNodoDto } from 'src/interfaces/dto/get-nodos.dto';

@Injectable()
export class getNodosUseCase {
  constructor(private readonly nodoService: NodoService) { }

  execute = async (): Promise<getNodoDto[]> => {
    return this.nodoService.convertArrayOfNodoToArrayOfGetNodoDto(await this.nodoService.getNodos());
  };
}
