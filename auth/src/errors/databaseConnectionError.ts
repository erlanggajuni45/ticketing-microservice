import { CustomError } from './customError';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Failed to connect to database';

  constructor() {
    super('Failed to connect to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
