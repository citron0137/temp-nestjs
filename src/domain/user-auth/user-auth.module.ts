import { Module } from '@nestjs/common';
import { UserAuthService } from './service/user-auth.service';

@Module({
  providers: [UserAuthService]
})
export class UserAuthModule {}
