import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import {EntitiesModule} from './entities/entities.module';
import { HomeComponent } from './home/home.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MenuComponent } from './shared/components/menu/menu.component';
import { TranslateLoader, TranslateModule, TranslateModuleConfig, TranslateService } from '@ngx-translate/core';
import {SharedModule} from './shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UgcPageComponent } from './pages/ugc-page/ugc-page.component';
import { UgcMobilePageComponent } from './pages/ugc-mobile-page/ugc-mobile-page.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

export function httpLoaderFactory(http: HttpClient) {
  if (location.origin.indexOf('hypeeyes.com') > 0 ) {
    return new TranslateHttpLoader(http, '/hypeeyes/web/i18n/', '.json');
  } else {
    return new TranslateHttpLoader(http, '/i18n/', '.json');
  }
}

const translateConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: httpLoaderFactory,
    deps: [HttpClient]
  }
};

const routes: Route[] = [
  {path: '', component: HomePageComponent},
  {path: 'categories/:id', component: CategoriesComponent},
  {path: 'ugc/:id', component: UgcPageComponent},
  {path: 'ugcMobile/:id', component: UgcMobilePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(translateConfig),
    PagesModule,
    EntitiesModule,
    SwiperModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ComponentsModule,
    NgbTabsetModule
  ],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('zh-cn');
  }
}
