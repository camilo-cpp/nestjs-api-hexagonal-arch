import * as joi from 'joi';

export const ValidatorEnv = joi.object({
  MONGO_DB_HOST: joi.string().required(),
  MONGO_DB_PORT: joi.number().required(),
  MONGO_DB_DATABASE: joi.string().required(),
  PORT: joi.number().default(3001),
});
