import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartEvent, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid ,
  ApexPlotOptions ,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend,
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
};
export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
  responsive: ApexResponsive[];
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;  // linechart option
  public chartOptions1: Partial<ChartOptions1>; //barchart option
  public chartOptions2: Partial<ChartOptions2>;  // donut option
  public artistData = [

    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',
    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    }
  ]
  constructor() { 
    // line chart
    this.chartOptions = {
      series: [
        {
          name: "Re Customers",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "New Customers",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 200,
        width :300,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };

// Bar chart
    this.chartOptions1 = {
      series: [
        {
          name: "Low Orders",
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: "High Orders",
          data: [53, 32, 33, 52, 13, 43, 32]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        width :600,
        stacked: true
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Fiction Books Sales"
      },
      xaxis: {
        categories: ['Jan', 'Feb','Mar','Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ],
        labels: {
          formatter: function(val) {
            return val  ;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1,
        colors: ['#F44336', '#E91E63']
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
// donut chart
this.chartOptions2 = {
  series: [44, 55, 22],
  chart: {
    type: "donut"
  },
  labels: ["Re Clients", "New Clients", "Refund Clients"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 250,
          height : 250
        },
        legend: {
          position: "top"
        } 
      }
    }
  ]
};

  
  }


 

  ngOnInit() {
     

}

 


}
