import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

console.log([__dirname.split('\\').join('/') + '/migrations/**/*{.ts,.js}'])
export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '*/**/*.entity{.ts,.js}'],
  synchronize: true,
  // migrations: ['/migrations/**/*{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
}
