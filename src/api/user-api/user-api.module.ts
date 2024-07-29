import { Module } from '@nestjs/common';
import { UserAuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [UserAuthController, UserController]
})
export class UserApiModule {}