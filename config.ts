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
      port: 6901,
      database: {
        type: 'postgres',
        database: 'ianray',
        host: 'localhost',
        port: 5432,
        username: 'ianray',
        password: 'test-password'
      }
    },
    credit: {
      host: 'localhost',
      port: 6902,
      database: {
        type: 'postgres',
        database: 'ianray',
        host: 'localhost',
        port: 5432,
        username: 'ianray',
        password: 'test-password'
      }
    },
    payments: {
      host: 'localhost',
      port: 6903,
      database: {
        type: 'postgres',
        database: 'ianray',
        host: 'localhost',
        port: 5432,
        username: 'ianray',
        password: 'test-password'
      }
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
        database: 'ianray',
        host: 'localhost',
        port: 5432,
        username: 'ianray',
        password: 'test-password'
      }
    },
    venues: {
      host: 'localhost',
      port: 6906,
      database: {
        type: 'postgres',
        database: 'ianray',
        host: 'localhost',
        port: 5432,
        username: 'ianray',
        password: 'test-password'
      }
    },
  }
}

export const rootConfig = { load: [() => config] };