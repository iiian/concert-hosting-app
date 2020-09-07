import { ViewEntity, Connection, ViewColumn } from 'typeorm';
import { ContentAuthorizationsEntity } from './content-authorizations-entity';
import { ContentEntity } from './content-entity';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select('content_authorizations.user_id', 'userId')
      .addSelect('content_authorizations.content_id', 'contentId')
      .addSelect('content.uri', 'uri')
      .addSelect('content.venue_id', 'venueId')
      .from(ContentAuthorizationsEntity, 'content_authorizations')
      .leftJoin(
        ContentEntity,
        'content',
        'content_authorizations.content_id = content.id',
      ),
})
export class UserContentAuthorizationsEntity {
  @ViewColumn()
  userId: string;

  @ViewColumn()
  contentId: string;

  @ViewColumn()
  uri: string;

  @ViewColumn()
  venueId: string;
}
