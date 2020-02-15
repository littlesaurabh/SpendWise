import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { AnalyticsService } from '../analytics.service';
@Component({
	selector: 'category',
	templateUrl: './category.page.html',
	styleUrls: ['./category.page.css']
})
export class CategoryPage implements OnInit {
	@ViewChild('pieChart', { static: false }) pieChart;

	monthChangedCat: Boolean = false;
	yearChangedCat: Boolean = false;
	bars: any;
	catChartLoaded: Boolean = true;
	categorySpend: any;
	colorArray: any = ['Red', 'Green', 'Yellow', 'Pink', 'Violet', 'Orange'];

	constructor(private analyticsService: AnalyticsService) {}

	ionViewDidEnter() {
		this.createPieChart();
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

	onMonthChangeCat() {
		this.monthChangedCat = true;
		this.checkCatChart();
	}

	onYearChangeCat() {
		this.yearChangedCat = true;
		this.checkCatChart();
	}

	checkCatChart() {
		console.log('Cat changed');
		if (this.monthChangedCat && this.yearChangedCat) {
			this.catChartLoaded = false;
			console.log('Cat changed 1');
			setTimeout(() => {
				this.catChartLoaded = true;
				this.categorySpend = [5, 3.8, 4, 2, 4, 9];
				this.createPieChart();
			}, 2000);
		}
	}

	ngOnInit() {
		this.categorySpend = this.analyticsService.getCategorySpend();
	}
}
