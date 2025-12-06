import { NestFactory } from '@nestjs/core';
import { SignalServiceModule } from './signal-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SignalServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
