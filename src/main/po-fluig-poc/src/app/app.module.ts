import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { APP_CONFIG } from './app.config';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HomeComponent } from './home/home.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LastPageComponent } from './last-page/last-page.component';

console.log(window);
console.log(APP_CONFIG.APP_BASE);
console.log(APP_BASE_HREF);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstPageComponent,
    LastPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: APP_CONFIG.APP_BASE || '/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
