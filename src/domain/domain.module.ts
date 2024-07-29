import { Module } from '@nestjs/common';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserAuthModule, UserModule],
  providers: []
})
export class DomainModule {}
