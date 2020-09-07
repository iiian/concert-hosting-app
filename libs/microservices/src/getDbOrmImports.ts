import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MicroserviceDatabaseConfig } from './service-config';

export function getDbOrmImports(name: string, type: any) {
  return [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const database: MicroserviceDatabaseConfig = configService.get(`services.${name}.database`);
        return {
          type: database.type,
          host: database.host,
          port: database.port,
          username: database.username,
          password: database.password,
          database: database.database,
          entities: [type],
          synchronize: true,
          keepConnectionAlive: true
        };
      }
    }),
    TypeOrmModule.forFeature([type])
  ]
}