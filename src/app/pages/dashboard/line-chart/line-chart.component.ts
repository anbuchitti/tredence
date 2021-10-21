import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  chart = new Chart({
    chart: {
      type: 'spline',
      inverted: true
    },
    title: {
      text: 'Atmosphere Temperature by Altitude'
    },
    subtitle: {
      text: 'According to the Standard Atmosphere Model'
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: 'Altitude'
      },
      labels: {
        format: '{value} km'
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 80 km.'
      },
      maxPadding: 0.05,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Temperature'
      },
      labels: {
        format: '{value}°'
      },
      accessibility: {
        rangeDescription: 'Range: 90°C to 20°C.'
      },
      lineWidth: 2
    },
    legend: {
      enabled: true
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x} km: {point.y}°C'
    },
    plotOptions: {
      spline: {
        marker: {
          enable: false
        }
      }
    },
    series: [{
      name: 'Temperature1',
      data: [[0,0], [10, 10], [30, 20], [40, 30]]
    },
    {
      name: 'Temperature2',
      data: [[0, 0], [20, 20], [30, 46.5], [40, 56.5]]
    }]
  } as any);
  ngOnInit() {
  }

}
