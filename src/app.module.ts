import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
import { UtilModule } from './util/util.module';
import { DatabaseModule } from './database/database.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ApiModule, DomainModule, UtilModule, DatabaseModule, ClientModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
