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
      data: [800, 1000, 200, 2000, 300, 3000, 400, 4000, 500, 5000, 600, 6000],
      color: 'orange'
    },
    {
      name: 'Aheer.com',
      data: [6500, 1500, 150, 1800, 250, 2500, 350, 2800, 450, 1300, 650, 4000],
      color: 'blue'
    },
    {
      name: 'Aheer.com',
      data: [3500, 115, 300, 900, 450, 950, 300, 700, 400, 900, 400, 2000],
      color: 'red'
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
