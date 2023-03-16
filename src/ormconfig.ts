import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { TagEntity } from './tag/tag.entity'
import { UserEntity } from './user/user.entity'

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: '123',
  database: 'mediumclone',
  entities: [TagEntity, UserEntity],
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  // migrations: ['/migrations/**/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
}
