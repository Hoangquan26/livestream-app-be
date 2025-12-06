import { Module } from '@nestjs/common';
import { SignalServiceController } from './signal-service.controller';
import { SignalServiceService } from './signal-service.service';

@Module({
  imports: [],
  controllers: [SignalServiceController],
  providers: [SignalServiceService],
})
export class SignalServiceModule {}
