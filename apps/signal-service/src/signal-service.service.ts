import { Injectable } from '@nestjs/common';

@Injectable()
export class SignalServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
