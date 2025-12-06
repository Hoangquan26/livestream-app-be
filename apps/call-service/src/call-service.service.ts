import { Injectable } from '@nestjs/common';

@Injectable()
export class CallServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
