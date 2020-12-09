import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donuts-chart',
  templateUrl: './donuts-chart.component.html',
  styleUrls: ['./donuts-chart.component.scss']
})
export class DonutsChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'myHighchart';

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'pie',
      renderTo: 'container'
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'CENTERED<br>TEXT',
      
    },
    plotOptions: {
      pie: {
        innerSize: '80%'
      }
    },
    series: [{
      data: [
        
        ['Firefox', 10.2,],
        ['IE7', 2.6],
        ['Chrome', 15.1],
        ['Chrome', 3.1],
        ['Chrome', 3.1],
        ['Chrome', 3.1],
        ['Chrome', 15.1],

      ]
    }]
  };
  

}
