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
        ['Islamabad', 6.2,],
        ['Karachi', 12.1],
        ['Lahore', 5.6],
        ['Faisalabad', 4.1],
        ['Multan', 3.1],
        ['Peshawar', 2.1],
      ]
    }]
  };
  

}
