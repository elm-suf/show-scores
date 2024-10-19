import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISearchDto, Search, TV } from '@shared/models';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class TvApiService {
  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService
  ) {}

  search(params: ISearchDto): Observable<Search<TV>> {
    const url = 'https://api.themoviedb.org/3/search/tv';
    const apiKey = this.configService.get<string>('TMDB_API_TOKEN'); // Read API key from .env
    Logger.log(`[SeriesApiService](search) -> api_key: ${apiKey} `);

    return this.http
      .get<Search<TV>>(url, {
        params,
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .pipe(
        map((res) => res.data),
        catchError((e) => {
          Logger.error(`[SeriesApiService](search) -> err: ${e} `);
          return of(e);
        })
      );
  }
}
