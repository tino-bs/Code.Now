import * as Joi from 'joi';

export const corsConfigValidationSchema = {
  CLIENT_HOST: Joi.string().required(),
};
