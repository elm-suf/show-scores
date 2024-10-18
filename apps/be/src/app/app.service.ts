import { Injectable } from '@nestjs/common';
import { Search, TV } from '@shared/models';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getSeriesByName(term: string): Search<TV> {
    return {
      items: [{ id: 1 }],
    };
  }
}
