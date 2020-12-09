import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  card5 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 11', cols: 1, rows: 1 },
          { title: 'Card 12', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 11', cols: 1, rows: 1 },
        { title: 'Card 12', cols: 1, rows: 1 },
      ];
    })
  );

  card6 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 13', cols: 1, rows: 1 },
          { title: 'Card 14', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 13', cols: 1, rows: 1 },
        { title: 'Card 14', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
