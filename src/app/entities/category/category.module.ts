import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {path: ':id', component: CategoryComponent},
];

@NgModule({
  declarations: [
    CategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CategoryModule { }
