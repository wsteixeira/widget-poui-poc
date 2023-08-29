import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LastPageComponent } from './last-page/last-page.component';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'last', component: LastPageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
