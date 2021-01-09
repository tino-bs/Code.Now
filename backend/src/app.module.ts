import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { globalConfig } from './config/global.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(globalConfig), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
