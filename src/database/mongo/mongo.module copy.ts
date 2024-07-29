import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
        user: configService.get('MONGO_USERNAME'),
        pass: configService.get('MONGO_PASSWORD'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {}
