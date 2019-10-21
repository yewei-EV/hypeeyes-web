import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: 'category', loadChildren: './category/category.module#CategoryModule'},
  ];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EntitiesModule { }
