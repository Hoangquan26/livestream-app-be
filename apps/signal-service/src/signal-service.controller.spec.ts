import { Test, TestingModule } from '@nestjs/testing';
import { SignalServiceController } from './signal-service.controller';
import { SignalServiceService } from './signal-service.service';

describe('SignalServiceController', () => {
  let signalServiceController: SignalServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SignalServiceController],
      providers: [SignalServiceService],
    }).compile();

    signalServiceController = app.get<SignalServiceController>(SignalServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(signalServiceController.getHello()).toBe('Hello World!');
    });
  });
});
