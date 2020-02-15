import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthPage } from './month.page';

const routes: Routes = [
  {
    path: '',
    component: MonthPage
  },
  {
  	path: 'month',
	redirectTo: ''
  },
  {
  	path: 'category',
  	redirectTo: '/analytics/category'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthPageRoutingModule {}
