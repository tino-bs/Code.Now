import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greeting = process.env.APP_GREETING;

  getHello(): string[] {
    return [this.greeting, this.greeting];
  }
}
