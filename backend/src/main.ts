import { NestFactory } from '@nestjs/core';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { AppModule } from './app.module';

const corsConfig: CorsOptions = {
  origin: process.env.CLIENT_HOST,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: corsConfig });
  await app.listen(process.env.APP_PORT);
}
bootstrap();
