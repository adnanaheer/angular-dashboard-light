import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-sec',
  templateUrl: './chart-sec.component.html',
  styleUrls: ['./chart-sec.component.scss']
})
export class ChartSecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'myHighchart';

  data = [
    {
      name: 'Aheer.com',
      data: [100, 1100, 200, 1000, 300, 900, 400, 800, 500, 700, 600, 1200],
      color: 'red'
    },
    {
      name: 'Aheer.com',
      data: [900, 1000, 300, 900, 400, 800, 500, 700, 600, 700, 550, 1150],
      color: 'blue'
    },
    {
      name: 'Aheer.com',
      data: [150, 1150, 1500, 950, 100, 800, 300, 900, 700, 600, 500, 900],
      color: 'orange'
    },
    {
      name: 'Aheer.com',
      data: [250, 1050, 290, 600, 250, 750, 380, 600, 700, 900, 300, 1100],
      color: 'green'
    },
  ];

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column',
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
