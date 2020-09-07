import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MicroserviceDatabaseConfig } from './service-config';

export function getDbOrmImports(name: string, types: any[]) {
  return [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseConfig: MicroserviceDatabaseConfig = configService.get(`services.${name}.database`);
        return {
          type: databaseConfig.type,
          host: databaseConfig.host,
          port: databaseConfig.port,
          username: databaseConfig.username,
          password: databaseConfig.password,
          database: databaseConfig.database,
          entities: types,
          synchronize: true
        };
      }
    }),
    TypeOrmModule.forFeature(types)
  ]
}