import { Injectable, NestMiddleware } from '@nestjs/common'
import { verify } from 'jsonwebtoken'
import { UserService } from '../user.service'
import { ExpressRequestInterface } from '../../types/expressRequest.interface'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}
  async use(req: ExpressRequestInterface, res, next) {
    if (!req.headers.authorization) {
      req.user = null
      next()
      return
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
      const decode = verify(token, 'secret')
      const user = await this.userService.findById(decode.id)
      req.user = user
      next()
    } catch (err) {
      req.user = null
      next()
    }
  }
}
