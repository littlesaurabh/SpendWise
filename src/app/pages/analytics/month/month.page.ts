import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnalyticsService } from '../analytics.service';
import { Chart } from 'chart.js';
import * as jsPDF from 'jspdf'
@Component({
	selector: 'month',
	templateUrl: './month.page.html',
	styleUrls: ['./month.page.css']
})
export class MonthPage implements OnInit {
	yearChartLoaded: Boolean = true;
	monthlySpend: any;
	bars: any;
	@ViewChild('barChart', { static: false }) barChart;
	constructor(private analyticsService: AnalyticsService) {}

	ngOnInit() {
		this.monthlySpend = this.analyticsService.getMonthlySpend();
	}
	@ViewChild('content', {static: false}) content: ElementRef;
  
  public downloadPdf() {
    let doc = new jsPDF();

    let dataUrl = this.barChart.nativeElement.toDataURL();
    // console.log(dataUrl)
    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    }
    var width = doc.internal.pageSize.getWidth();
	var height = doc.internal.pageSize.getHeight();

    let content = this.content.nativeElement;

    // doc.canvas
    // doc.addHTML(this.content.nativeElement.innerHTML)
    // doc.addImage(dataUrl, 'JPEG', 0, 0);
    doc.addImage(dataUrl, 'JPEG', 15, 30,  width/2.5, 80,"abc","NONE")
    doc.fromHTML("<h2 style='color:red'><u><i>Yearly Report for 2019</i><u></h2>", 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    doc.addImage(dataUrl, 'JPEG', width/2.5 + 40, 30,  width/2.5, 80,"abc","SLOW")
    doc.fromHTML("<h2 style='color:blue'><u><i>Yearly Report for 2019</i><u></h2>", width/2.5 + 40, 15, {
      'width': 190,
      'elementHandlers': specialElementHandlers
    });

    // console.log(content.innerHTML)

    doc.save("test.pdf");

  }
	onYearChange() {
		this.yearChartLoaded = false;
		setTimeout(() => {
			this.yearChartLoaded = true;
			this.monthlySpend = [
				5,
				3.8,
				4,
				2,
				4,
				9,
				12,
				11,
				6,
				7.36,
				2.5,
				10.1
			];
			this.createBarChart();
		}, 2000);
	}

	ionViewDidEnter() {
		console.log('ivde');
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
