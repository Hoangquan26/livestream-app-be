import { Module } from '@nestjs/common';
import { CallServiceController } from './call-service.controller';
import { CallServiceService } from './call-service.service';

@Module({
  imports: [],
  controllers: [CallServiceController],
  providers: [CallServiceService],
})
export class CallServiceModule {}
