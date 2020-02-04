import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroDashBoardComponent} from "./hero-dashboard/hero-dashboard.component";

const heroesRoutes: Routes = [
      {path: 'hero-dashboard', component: HeroDashBoardComponent},
      {path: 'heroes', component: HeroListComponent, data: {animation: 'heroes'}},
      {path: 'hero/:id', component: HeroDetailComponent, data: {animation: 'hero'}}
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule {
}
