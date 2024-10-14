import { Module, forwardRef } from '@nestjs/common';
import { InMemoryNodoRepository } from './database/in-memory-nodo.repository';
import { NodoController } from './controllers/nodo.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [forwardRef(() => ApplicationModule)],
  controllers: [NodoController],
  providers: [
    {
      provide: 'NodoRepository',
      useClass: InMemoryNodoRepository,
    },
  ],
  exports: ['NodoRepository']
})
export class InfrastructureModule {}
