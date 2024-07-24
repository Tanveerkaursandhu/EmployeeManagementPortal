import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  title = 'chartDemo';

  ngOnInit() {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Data1',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: "#0196FD",
          borderColor: "#0196FD",
          borderWidth: 1
        },
        {
          label: 'Data2',
          data: [19, 12, 5, 3, 1, 6],
          backgroundColor: "#FFAF00",
          borderColor: "#FFAF00",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            type: 'category',
            scaleLabel: {
              display: true,
              labelString: 'Colors'
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Values'
            }
          }]
        }
      }
    });
  }
}
