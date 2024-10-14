import { ApplicationError } from './application.error';

export class ServiceUnavailableError extends ApplicationError {
  constructor(message: string = 'Service Unavailable') {
    super(message);
  }
}
