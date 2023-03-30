import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { ArticleEntity } from './article/article.entity'
import { UserEntity } from './user/user.entity'
import { TagEntity } from './tag/tag.entity'

console.log([__dirname.split('\\').join('/') + '/migrations/**/*{.ts,.js}'])
export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: '123',
  database: 'mediumclone',
  //entities: [__dirname + '*/**/*.entity{.ts,.js}'],
  entities: [ArticleEntity, UserEntity, TagEntity],
  synchronize: true,
  // migrations: ['/migrations/**/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
}
