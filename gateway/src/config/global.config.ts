import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import * as Joi from 'joi';
import { ormConfigPostgres } from './orm.config';

const validationSchema = Joi.object({
  // base app config
  APP_PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),

  // database config
  ...ormConfigPostgres,
});

export const globalConfig: ConfigModuleOptions = {
  isGlobal: true,

  // if a variable is found in multiple .env files, the first one takes precedence
  envFilePath: ['.env.local', '.env'],

  // config validations
  validationSchema,
};
