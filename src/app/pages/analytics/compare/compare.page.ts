import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'compare',
  templateUrl: './compare.page.html',
  styleUrls: ['./compare.page.css'],
})
export class ComparePage implements OnInit {
	@ViewChild('pieChart', { static: false }) pieChart;

  	monthChangedCat: Boolean = false;
	yearChangedCat: Boolean = false;
	bars: any;
	catChartLoaded: Boolean = true;
	categorySpend: any;
	categories: any;
	colorArray: any = ['Red', 'Green', 'Yellow', 'Pink', 'Violet', 'Orange'];

	constructor(private analyticsService: AnalyticsService) {}

	ionViewDidEnter() {
		this.createPieChart();
	}

	createPieChart() {
		this.bars = new Chart(this.pieChart.nativeElement, {
			type: 'bar',
			data: {
				labels: this.categories,
				datasets: [
					{
						label: 'Year 2019',
						data: this.categorySpend,
						backgroundColor: 'Green', // array should have same number of elements as number of dataset
						borderColor: 'green', // array should have same number of elements as number of dataset
						borderWidth: 1
					}, 
					{
						label: 'Year 2020',
						data: [5000, 3800, 4000, 2000, 4000, 9000],
						backgroundColor: 'Red',
						borderColor: 'red',
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
		this.categories = this.analyticsService.getCategories();
	}
}
