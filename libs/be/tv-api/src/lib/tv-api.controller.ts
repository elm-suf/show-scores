import { Controller, Get, Logger, Query } from '@nestjs/common';
import { TvApiService } from './tv-api.service';
import { SearchInputDto } from './dtos/search-input.dto';

@Controller('tv')
export class TvApiController {
  constructor(private service: TvApiService) {}

  @Get('search')
  search(@Query() query: SearchInputDto) {
    Logger.log(`[SeriesApiController](search) -> query: ${query}`);
    return this.service.search(query);
  }
}
