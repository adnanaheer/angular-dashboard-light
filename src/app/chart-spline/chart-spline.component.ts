import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import StockModule from 'highcharts/modules/stock';
// import DarkTheme from 'highcharts/themes/dark-unica.src.js';

StockModule(Highcharts);
// DarkTheme(Highcharts);

@Component({
  selector: 'app-chart-spline',
  templateUrl: './chart-spline.component.html',
  styleUrls: ['./chart-spline.component.scss']
})
export class ChartSplineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Highcharts: typeof Highcharts = Highcharts;

  data = [
    {
      name: 'Company A',
      type:'line',

      data: [
        [Date.parse('2020-07-03T07:00:00'), 267],
        [Date.parse('2020-07-04T07:00:00'), 1400],
        [Date.parse('2020-07-05T07:00:00'), 1701],
        [Date.parse('2020-07-06T07:00:00'), 2023],
        [Date.parse('2020-07-07T07:00:00'), 2071],
        [Date.parse('2020-07-08T07:00:00'), 2205],
        [Date.parse('2020-07-09T07:00:00'), 1999],
      ],
      id: 'A',
    },
    {
      name: 'Company B',
      type:'line',
      data: [
        [Date.parse('2020-07-03T07:00:00'), 677],
        [Date.parse('2020-07-04T07:00:00'), 1677],
        [Date.parse('2020-07-05T07:00:00'), 1657],
        [Date.parse('2020-07-06T07:00:00'), 771],
        [Date.parse('2020-07-07T07:00:00'), 1453],
        [Date.parse('2020-07-08T07:00:00'), 1923],
        [Date.parse('2020-07-09T07:00:00'), 1920],
      ],
      id: 'B',
    },
    {
      name: 'Flags',

      type: 'flags',
      data: [
        {
          x: Date.parse('2020-07-08T07:00:00'),
          title: 'Highest',
          text: 'highest',
        },
      ],
      onSeries: 'A',
      shape: 'flag',
    },
  ];

  chartOptions = {
    chart: {
      type: 'spline',
    },
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      floating: false,
      borderWidth: 1,
    },
    title: {
      text: 'Stock Price Graph',
      style: { color: 'red' },
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Stock Price',
      },
      type: 'number',
    },
    plotOptions: {
      series: {
        pointStart: Date.parse('2020-07-03T07:00:00'),
        pointInterval: 24 * 3600 * 60, 
      },
    },
    time: {
      useUTC: false,
    },

    series: this.data,
  };

}
