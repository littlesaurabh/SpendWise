import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { AnalyticsService } from './analytics.service';

@Component({
	selector: 'analytics',
	templateUrl: './analytics.page.html',
	styleUrls: ['./analytics.page.scss']
})
export class AnalyticsPage implements OnInit {
	@ViewChild('barChart', { static: false }) barChart;
	@ViewChild('pieChart', { static: false }) pieChart;

	bars: any;
	colorArray: any = ['Red', 'Green', 'Yellow', 'Pink', 'Violet', 'Orange'];
	monthlySpend: any;
	categorySpend: any;
	constructor(private analyticsService: AnalyticsService) {}

	ionViewDidEnter() {
		this.createBarChart();
		this.createPieChart();
	}

	createBarChart() {
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

	ngOnInit() {
		this.monthlySpend = this.analyticsService.getMonthlySpend();
		this.categorySpend = this.analyticsService.getCategorySpend();
	}
}
