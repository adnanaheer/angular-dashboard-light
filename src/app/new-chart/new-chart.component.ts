import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-new-chart',
  templateUrl: './new-chart.component.html',
  styleUrls: ['./new-chart.component.scss'],
})
export class NewChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'myHighchart';

  data = [
    {
      name: 'Aheer.com',
      data: [100, 1100, 200, 1000, 300, 900, 400, 800, 500, 700, 600, 1100],
      color: 'orange'
    },
  ];

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Monthly Site Visitor',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    series: this.data,
  };
}
