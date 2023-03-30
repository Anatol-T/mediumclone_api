import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { validate } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  readonly username: string

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string

  @IsOptional()
  @IsString()
  readonly bio: string

  @IsOptional()
  @IsString()
  readonly image: string
}
