import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComparePage } from './compare.page';

const routes: Routes = [
  {
    path: '',
    component: ComparePage
  },
  {
  	path: 'compare',
	redirectTo: ''
  },
  {
  	path: 'category',
  	redirectTo: '/analytics/category'
  }
  ,
  {
    path:'month',
    redirectTo: '/analytics/month'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComparePageRoutingModule {}
