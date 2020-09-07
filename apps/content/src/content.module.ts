import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { ConfigModule } from '@nestjs/config';
import { rootConfig } from 'config';
import { getDbOrmImports } from '@rr/microservices';
import { ContentEntity } from './content-entity';
import { ContentAuthorizationsEntity } from './content-authorizations-entity';
import { UserContentAuthorizationsEntity } from './user-content-entity';

@Module({
  imports: [
    ConfigModule.forRoot(rootConfig),
    ...getDbOrmImports('content', [
      ContentEntity,
      ContentAuthorizationsEntity,
      UserContentAuthorizationsEntity,
    ]),
  ],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
