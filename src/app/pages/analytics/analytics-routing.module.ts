import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MonthComponent } from './month/month'


import { AnalyticsPage } from './analytics.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsPage,
  },
  {
    path: 'month',
    loadChildren: () => import('./month/month.module').then( m => m.MonthPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('./compare/compare.module').then( m => m.ComparePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPageRoutingModule {}
