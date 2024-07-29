import { Module } from '@nestjs/common';
import { AdminApiModule } from './admin-api/admin-api.module';
import { UserApiModule } from './user-api/user-api.module';

@Module({
  imports: [AdminApiModule, UserApiModule]
})
export class ApiModule {}
