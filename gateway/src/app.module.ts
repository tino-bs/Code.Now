import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { globalConfig } from './config/global.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(globalConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
