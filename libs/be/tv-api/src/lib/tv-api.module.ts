import { Module } from '@nestjs/common';
import { TvApiController } from './tv-api.controller';
import { TvApiService } from './tv-api.service';

@Module({
  controllers: [TvApiController],
  providers: [TvApiService],
  exports: [TvApiService],
})
export class TvApiModule {}
