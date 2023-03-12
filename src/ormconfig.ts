import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { TagEntity } from './tag/tag.entity'

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: '123',
  database: 'mediumclone',
  entities: [TagEntity],
  synchronize: true,
}
