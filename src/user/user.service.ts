import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/createUser.dto'
import { UserEntity } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { sign } from 'jsonwebtoken'
import { UserResponseInterface } from './types/userResponse.intrface'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this.userRepository.findOne({ where: { email: createUserDto.email } })
    const userByUsername = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    })
    if (userByUsername || userByEmail) {
      throw new HttpException('Email or username are taken', HttpStatus.UNPROCESSABLE_ENTITY)
    }
    const newUser = new UserEntity()
    Object.assign(newUser, createUserDto)
    return await this.userRepository.save(newUser)
  }
  buildUserResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJwt(user),
      },
    }
  }

  private generateJwt(user: UserEntity) {
    return sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      'secret',
    )
  }
}
