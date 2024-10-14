import { Controller, Get } from '@nestjs/common';
import { getNodosUseCase } from 'src/application/use-cases/get-nodos.use-case';
import { getNodoDto } from 'src/interfaces/dto/get-nodos.dto';

@Controller('nodes')
export class NodoController {
  constructor(private readonly nodoUseCase: getNodosUseCase) {}

  @Get()
  getNodos(): Promise<getNodoDto[]> {
    return this.nodoUseCase.execute();
  }
}
