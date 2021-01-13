import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  const ORIGINAL_ENV = process.env;
  let appController: AppController;

  beforeEach(async () => {
    process.env = { ...ORIGINAL_ENV };
    process.env.APP_GREETING = 'Hello World!';

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toContain('Hello World!');
    });
  });
});
