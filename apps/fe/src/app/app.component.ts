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
    <input
      type="text"
      [value]="term"
      (change)="termChange($any($event.target))"
    />

    ping: {{ ping$ | async | json }} api data: {{ data$ | async | json }}
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  api = inject(AppService);
  term = '';
  termChange(target: any) {
    this.term = target.value;
    this.data$ = this.api.search({ query: this.term });
  }

  ping$ = this.api.ping();
  data$ = this.api.search({ query: 'hello' });
}
