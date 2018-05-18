import { Component, OnInit } from '@angular/core';
import { ChartsComponent } from 'chart-angular5';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chartStyle = {
    "height.px": 400,
    "width.px": 600,
    "font-family": "Arial"
  };

  lineStyle = {
    stroke: "red",
    "stroke-width": "1", //6=thicker
    "stroke-dasharray": "5,5" // 0 = continous line
  }

  labelStyle = {
    color: "#0000FF"
  }

  chartData = [
    { xlabel: "Jan", value: 1234 },
    { xlabel: "Feb", value: 745 },
    { xlabel: "March", value: 300 },
    { xlabel: "April", value: 50 },
    { xlabel: "May", value: 400 },
    { xlabel: "June", value: 600 },
    { xlabel: "July", value: 156 },
    { xlabel: "Aug", value: 236 },
    { xlabel: "Sept", value: 119 },
    { xlabel: "Oct", value: 234 },
  ];


  dataSet = {
    type: 'line',
    title: 'Demo Line Graph',
    labels: { xAxisID: 'Users', yAxisID: 'Months' }, //optional 
    data: this.chartData,
    style: this.chartStyle,
    lineStyle: this.lineStyle,
    labelStyle: this.labelStyle
  }

  constructor() { }

  ngOnInit() {
  }

}
