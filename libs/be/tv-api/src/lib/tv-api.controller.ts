import { Controller } from '@nestjs/common';
import { TvApiService } from './tv-api.service';

@Controller('tv-api')
export class TvApiController {
  constructor(private tvApiService: TvApiService) {}
}
