import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TagModule } from './tag/tag.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from './ormconfig'
import { UserModule } from './user/user.module'
import { AuthMiddleware } from './user/middelewares/auth.middleware'

@Module({
  imports: [TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })
  }
}
