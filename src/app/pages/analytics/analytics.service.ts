import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AnalyticsService {
	monthlySpend = [2, 3.8, 5, 6.9, 6.9, 7.5, 10, 17, 5, 5.36, 7.5, 1.1];

categories = [
					'Food',
					'Groceries',
					'House',
					'Transportation',
					'Clothing',
					'Entertainment'
				];
	categorySpend = [2500, 3800, 5000, 6900, 6900, 7500];
	constructor() {}

	getMonthlySpend() {
		return this.monthlySpend;
	}

	getCategorySpend() {
		return this.categorySpend;
	}

	getCategories() {
		return this.categories;
	}
}
