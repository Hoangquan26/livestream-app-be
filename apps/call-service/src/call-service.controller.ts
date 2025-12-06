import { Controller, Get } from '@nestjs/common';
import { CallServiceService } from './call-service.service';

@Controller()
export class CallServiceController {
  constructor(private readonly callServiceService: CallServiceService) {}

  @Get()
  getHello(): string {
    return this.callServiceService.getHello();
  }
}
