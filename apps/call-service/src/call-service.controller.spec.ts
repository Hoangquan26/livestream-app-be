import { Test, TestingModule } from '@nestjs/testing';
import { CallServiceController } from './call-service.controller';
import { CallServiceService } from './call-service.service';

describe('CallServiceController', () => {
  let callServiceController: CallServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CallServiceController],
      providers: [CallServiceService],
    }).compile();

    callServiceController = app.get<CallServiceController>(CallServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(callServiceController.getHello()).toBe('Hello World!');
    });
  });
});
