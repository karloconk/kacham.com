import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglegameComponent } from './singlegame/singlegame.component';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [{
    path: '',
    component: DashboardBaseComponent
  }, {
    path: 'games/:id',
    component: SinglegameComponent
  }, {
    path: 'aboutUs',
    component: AboutUsComponent
  }, {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
