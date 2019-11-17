import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomePageComponent,
    CategoriesComponent
  ]
})
export class PagesModule { }
