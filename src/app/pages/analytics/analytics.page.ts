import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { AnalyticsService } from './analytics.service';

@Component({
	selector: 'analytics',
	templateUrl: './analytics.page.html',
	styleUrls: ['./analytics.page.css']
})
export class AnalyticsPage implements OnInit {
	@ViewChild('barChart', { static: false }) barChart;
	@ViewChild('pieChart', { static: false }) pieChart;


	yearChartLoaded: Boolean = true;
	monthChangedCat: Boolean = false;
	yearChangedCat: Boolean = false;
	catChartLoaded: Boolean = true;
	bars: any;
	colorArray: any = ['Red', 'Green', 'Yellow', 'Pink', 'Violet', 'Orange'];
	monthlySpend: any;
	categorySpend: any;
	constructor(private analyticsService: AnalyticsService) {
				console.log("cons")
	}

	ionViewDidEnter() {
		console.log("ivde")
		this.createBarChart();
		this.createPieChart();
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

	createPieChart() {
		this.bars = new Chart(this.pieChart.nativeElement, {
			type: 'pie',
			data: {
				labels: [
					'Food',
					'Groceries',
					'House',
					'Transportation',
					'Clothing',
					'Entertainment'
				],
				datasets: [
					{
						label: 'Amount in Hundreds',
						data: this.categorySpend,
						backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
						borderColor: 'Black', // array should have same number of elements as number of dataset
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

	onYearChange() {
		this.yearChartLoaded = false;
		setTimeout(()=>{
			this.yearChartLoaded = true;
			this.monthlySpend = [5, 3.8, 4, 2, 4, 9, 12, 11, 6, 7.36, 2.5, 10.1];
			this.createBarChart()
		}, 2000)

	}

onMonthChangeCat() {
	this.monthChangedCat = true;
	this.checkCatChart();
}

onYearChangeCat() {
	this.yearChangedCat = true;
	this.checkCatChart();
}

checkCatChart() {
	console.log("Cat changed")
	if(this.monthChangedCat && this.yearChangedCat) {
		this.catChartLoaded = false;
		console.log("Cat changed 1")
		setTimeout(()=>{
			this.catChartLoaded = true;
			this.categorySpend = [5, 3.8, 4, 2, 4, 9];
			this.createPieChart()
		}, 2000)
	}
}

	ngOnInit() {
		console.log("init") 
		this.monthlySpend = this.analyticsService.getMonthlySpend();
		this.categorySpend = this.analyticsService.getCategorySpend();
	}
}
