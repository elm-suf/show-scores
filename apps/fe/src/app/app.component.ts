import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    ping: {{ ping$ | async | json }} api data: {{ data$ | async | json }}
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public api = inject(AppService);
  ping$ = this.api.ping();
  data$ = this.api.search({ query: 'hello' });
}
