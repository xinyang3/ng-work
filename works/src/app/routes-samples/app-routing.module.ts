import { NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import PageNotFoundComponent from './page-not-found.component';
import {SelectivePreloadingStrategyService} from './crisis-center/selective-preloading-strategy.service';

const routes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    // RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategyService })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategyService
  ]
})
export default class AppRoutingModule {}
