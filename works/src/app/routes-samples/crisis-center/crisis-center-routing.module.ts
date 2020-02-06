import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';

import {StrategyServiceModuleComponent} from './strategy-service-module.component';

import {CrisisDetailResolverService} from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    // canLoad: [CrisisCenterAuthGuard],
    children: [
      {
        path: 'list',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            data: {preload: true},
            // canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolverService
            }
          },
          // {
          //   path: '',
          //   component: CrisisCenterHomeComponent
          // }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    StrategyServiceModuleComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule {
}
