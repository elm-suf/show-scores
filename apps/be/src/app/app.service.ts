import { Injectable } from '@nestjs/common';
import { Ping, Search, TV } from '@shared/models';

@Injectable()
export class AppService {
  ping(): Ping {
    return { message: 'Hello API' };
  }

  getSeriesByName(term: string): Search<TV> {
    return {
      items: [{ id: 1 }],
    };
  }
}
