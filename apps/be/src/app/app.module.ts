import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TvApiModule } from '@be/tv-api';

@Module({
  imports: [ConfigModule.forRoot(), TvApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
