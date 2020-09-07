export interface MicroserviceDatabaseConfig {
  type: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

export interface MicroserviceConfig {
  host: string,
  port: number,
  database?: MicroserviceDatabaseConfig
}

 export interface RRConfigObject {
  bcrypt: {
    saltRounds: number
  };
  authJwtModuleOptions: {
    secret: string,
    signOptions: {
      expiresIn: string
    }
  };
  services: {
    apiGateway: MicroserviceConfig,
    content: MicroserviceConfig,
    credit: MicroserviceConfig,
    payments: MicroserviceConfig,
    stripe: MicroserviceConfig,
    users: MicroserviceConfig,
    venues: MicroserviceConfig
  };
}