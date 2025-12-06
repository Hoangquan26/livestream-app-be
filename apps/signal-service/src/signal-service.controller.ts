import { Controller, Get } from '@nestjs/common';
import { SignalServiceService } from './signal-service.service';

@Controller()
export class SignalServiceController {
  constructor(private readonly signalServiceService: SignalServiceService) {}

  @Get()
  getHello(): string {
    return this.signalServiceService.getHello();
  }
}
