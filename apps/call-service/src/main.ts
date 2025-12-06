import { NestFactory } from '@nestjs/core';
import { CallServiceModule } from './call-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CallServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
