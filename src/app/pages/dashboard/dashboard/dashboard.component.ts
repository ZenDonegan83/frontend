import { Component, OnInit, ViewChild } from "@angular/core";
import { DashboardService } from "./../../../core/services/dashboard.service";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from "ng-apexcharts";

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

export type AreaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
};

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // --------------------  dummy data for the artists stats table
  @ViewChild("chart") chart: ChartComponent;
  public barChartOptions: Partial<BarChartOptions>;
  public areaChartOptions: Partial<AreaChartOptions>;
  public pieChartOptions: Partial<PieChartOptions>;

  constructor(private _service: DashboardService) {
    this.barChartOptions = {
      chart: {
        type: "bar",
        height: 350,
        // background: "black",
        foreColor: "white",
      },
      // dataLabels: {
      //   // enabled: true,
      //   formatter: function (val) {
      //     return val + "";
      //   },
      //   // offsetY: -20,
      //   style: {
      //     fontSize: "12px",
      //     // colors: ["#77EF31"],
      //   },
      // },
      xaxis: {
        //   // labels: {
        //   //   style: {
        //   //     // colors: "#77EF31",
        //   //     fontSize: "12px",
        //   //   },
        //   // },
        //   // position: "top",
        //   // axisBorder: {
        //   //   show: false,
        //   // },
        //   // axisTicks: {
        //   //   show: false,
        //   // },
        //   // crosshairs: {
        //   //   fill: {
        //   //     type: "gradient",
        //   //     gradient: {
        //   //       colorFrom: "#D8E3F0",
        //   //       colorTo: "#BED1E6",
        //   //       stops: [0, 100],
        //   //       opacityFrom: 0.4,
        //   //       opacityTo: 0.5,
        //   //     },
        //   //   },
        //   // },
        //   // tooltip: {
        //   //   enabled: true,
        //   //   // offsetY: {
        //   //   //   formatter: function (val) {
        //   //   //     return val;
        //   //   //   },
        //   //   // },
        //   // },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      // tooltip: {
      //   y: {
      //     formatter: function (val) {
      //       return "" + val;
      //     },
      //   },
      // },
      series: [
        {
          name: "Orders",
          data: [
            // {
            //   x: "Jan",
            //   y: 300,
            //   goals: [
            //     {
            //       name: "Expected",
            //       value: 1400,
            //       strokeHeight: 5,
            //       strokeColor: "#775DD0",
            //     },
            //   ],
            // },
            300, 650, 100, 780, 100, 300, 230, 500, 200, 350, 100, 150,
          ],
        },
      ],
    };

    this.areaChartOptions = {
      series: [
        {
          name: "Re Customers",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "New Customers",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 270,
        type: "area",
        // background: "black",
        foreColor: "white",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    };

    this.pieChartOptions = {
      series: [44, 55, 41],
      chart: {
        width: 380,
        height: 270,
        type: "donut",
        foreColor: "white",
      },
      dataLabels: {
        enabled: true,
      },

      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  }
  public artistData = [
    {
      artist: "Liza",
      started: "22-01-2022",
      hours: "465",
      notat: "342",
      earned: "$3400",
    },
    {
      artist: "Liza",
      started: "22-01-2022",
      hours: "465",
      notat: "342",
      earned: "$3400",
    },
    {
      artist: "Liza",
      started: "22-01-2022",
      hours: "465",
      notat: "342",
      earned: "$3400",
    },
    {
      artist: "Liza",
      started: "22-01-2022",
      hours: "465",
      notat: "342",
      earned: "$3400",
    },
    {
      artist: "Liza",
      started: "22-01-2022",
      hours: "465",
      notat: "342",
      earned: "$3400",
    },
    {
      artist: "Liza",
      started: "22-01-2022",
      hours: "465",
      notat: "342",
      earned: "$3400",
    },
    {
      artist: "Liza",
      started: "22-01-2022",
      hours: "465",
      notat: "342",
      earned: "$3400",
    },
  ];
  public depList: any[] = [];

  ngOnInit() {
    this._service.getAll().subscribe((res) => {
      this.depList = res;
    });
  }
}
