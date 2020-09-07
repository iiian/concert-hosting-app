import { RRConfigObject } from '@rr/microservices';

/**
 * A global config object. Should be treated as if it were a loose "environment-file"
 * and should, accordingly, be changed per environment
 */
export const config: RRConfigObject = {
  bcrypt: { saltRounds: 20 },
  authJwtModuleOptions: {
    secret: 'secretKey',
    signOptions: { expiresIn: '12h' }
  },
  services: {
    apiGateway: {
      host: 'localhost',
      port: 6900
    },
    content: {
      host: 'localhost',
      port: 6901
    },
    credit: {
      host: 'localhost',
      port: 6902
    },
    payments: {
      host: 'localhost',
      port: 6903
    },
    stripe: {
      host: 'localhost',
      port: 6904
    },
    users: {
      host: 'localhost',
      port: 6905,
      database: {
        type: 'postgres',
        database: 'postgres',
        host: 'localhost',
        port: 7001,
        username: 'iiian',
        password: 'test-password'
      }
    },
    venues: {
      host: 'localhost',
      port: 6906,
      database: {
        type: 'postgres',
        database: 'postgres',
        host: 'localhost',
        port: 7000,
        username: 'postgres',
        password: 'test-password'
      }
    },
  }
}

export const rootConfig = { load: [() => config] };