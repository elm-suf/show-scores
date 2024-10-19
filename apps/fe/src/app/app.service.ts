import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ISearchDto, Ping, Search, TV } from '@shared/models';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  http = inject(HttpClient);
  search(params: ISearchDto) {
    return this.http.get<Search<TV>>('/api/tv', { params });
  }

  ping(): Observable<Ping> {
    console.debug(`[AppService] PING`);

    return this.http.get<Ping>('/api').pipe(
      tap((deb) => console.debug(`[DEBUG]`, deb)),
      catchError((err) => {
        return of({ message: 'ERROR', err });
      })
    );
  }
}
