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

console.log(window);
console.log(APP_BASE_HREF);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: APP_CONFIG.APP_BASE || '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
