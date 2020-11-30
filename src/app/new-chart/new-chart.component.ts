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
      name: 'ItSolutionStuff.com',
      data: [300, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 800],
    },
    {
      name: 'Nicesnippets.com',
      data: [200, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 300],
    },
    {
      name: 'Aheer.com',
      data: [100, 1100, 200, 1000, 300, 900, 400, 800, 500, 700, 600, 1100],
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
    yAxis: {
      title: {
        text: 'Visitors',
      },
    },
    series: this.data,
  };
}
