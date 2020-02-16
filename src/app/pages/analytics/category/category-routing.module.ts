import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryPage } from './category.page';

const routes: Routes = [
	{
		path: '',
		component: CategoryPage
	},
	{
		path: 'category',
		redirectTo: ''
	},
	{
		path: 'month',
		redirectTo: '/analytics/month'
	},
	{
    path:'compare',
    redirectTo: '/analytics/compare'
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoryPageRoutingModule {}
