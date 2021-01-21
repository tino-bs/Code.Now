import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AdminBro from 'admin-bro';
import { AdminModule } from '@admin-bro/nestjs';
import { Database, Resource } from '@admin-bro/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { globalConfig } from './core/config/global.config';
import { DatabaseModule } from './core/database/database.module';
import { adminModuleOptions } from './admin/adminModuleOptions';
import { MeasurementsModule } from './features/measurements/measurements.module';

AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    // core
    ConfigModule.forRoot(globalConfig),
    DatabaseModule,

    // admin
    AdminModule.createAdmin(adminModuleOptions),

    // features
    MeasurementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
