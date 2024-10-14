import { Module, forwardRef } from '@nestjs/common';
import { NodoService } from './services/nodo.service';
import { getNodosUseCase } from './use-cases/get-nodos.use-case';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [forwardRef(() => InfrastructureModule)],
  providers: [
    NodoService,
    getNodosUseCase,
  ],
  exports: [
    getNodosUseCase,
  ],
})
export class ApplicationModule {}
