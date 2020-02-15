import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'month',
  templateUrl: './month.page.html',
  styleUrls: ['./month.page.css'],
})
export class MonthPage implements OnInit {


	yearChartLoaded: Boolean = true;
monthlySpend: any;
bars: any;
	@ViewChild('barChart', { static: false }) barChart;
  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit() {
  			this.monthlySpend = this.analyticsService.getMonthlySpend();

  }
  	onYearChange() {
		this.yearChartLoaded = false;
		setTimeout(()=>{
			this.yearChartLoaded = true;
			this.monthlySpend = [5, 3.8, 4, 2, 4, 9, 12, 11, 6, 7.36, 2.5, 10.1];
			this.createBarChart()
		}, 2000)

	}

  ionViewDidEnter() {
		console.log("ivde")
		this.createBarChart();
		}

		createBarChart() {
		console.log(this.barChart);
		this.bars = new Chart(this.barChart.nativeElement, {
			type: 'line',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December'
				],
				datasets: [
					{
						label: 'Amount in Hundreds',
						data: this.monthlySpend,
						backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
						borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				}
			}
		});
	}

}
