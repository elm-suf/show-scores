import { Module } from '@nestjs/common';
import { TvApiController } from './tv-api.controller';
import { TvApiService } from './tv-api.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [TvApiController],
  providers: [TvApiService],
  exports: [TvApiService],
})
export class TvApiModule {}
