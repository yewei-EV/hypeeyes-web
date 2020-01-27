import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CategoryMobileComponent } from './category-mobile.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {path: ':id', component: CategoryMobileComponent},
];

@NgModule({
  declarations: [
    CategoryMobileComponent
  ],
  exports: [
    CategoryMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CategoryMobileModule { }
