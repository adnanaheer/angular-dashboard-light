import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  card3 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 7', cols: 1, rows: 1 },
          { title: 'Card 8', cols: 1, rows: 1 },
          { title: 'Card 9', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 7', cols: 1, rows: 1 },
        { title: 'Card 8', cols: 1, rows: 1 },
        { title: 'Card 9', cols: 1, rows: 1 },
      ];
    })
  );

  card4 = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ title: 'Card 10', cols: 2, rows: 2 }];
      }

      return [{ title: 'Card 10', cols: 2, rows: 2 }];
    })
  );

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
