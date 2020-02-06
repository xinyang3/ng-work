import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { FormsModule }    from '@angular/forms';

import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import CrisisListComponent from '../miles-stone1/crisis-list.component';
import HeroListComponent from '../miles-stone1/hero-list.component';
import IndexComponent from './index.component';
import IndexHomeComponent from '../miles-stone1/index-home.component';

import {HeroDashBoardComponent} from "../miles-stone3/hero-dashboard/hero-dashboard.component";
import {HeroListComponent as HeroListComponent3 } from "../miles-stone3/hero-list/hero-list.component";
import {HeroDetailComponent as HeroDetailComponent3} from "../miles-stone3/hero-detail/hero-detail.component";

import {AdminComponent} from "../admin/admin/admin.component";
import {ManageCrisesComponent} from "../admin/manage-crises/manage-crises.component";
import {ManageHeroesComponent} from "../admin/manage-heroes/manage-heroes.component";
import {AdminDashboardComponent} from "../admin/admin-dashboard/admin-dashboard.component";

import {LoginComponent} from "../auth/login/login.component";

import { AuthGuard} from "../auth/auth.guard";
import {CanDeactivateGuard} from "../auth/can-deactivate.guard";

import {CrisisCenterComponent} from "../admin/crisis-center/crisis-center.component";
import {CrisisListComponent as CrisisListComponentAdmin} from "../admin/crisis-center/crisis-list/crisis-list.component";
import {CrisisDetailComponent} from "../admin/crisis-center/crisis-detail/crisis-detail.component";
import {CrisisDetailResolverService} from "../admin/crisis-center/crisis-detail-resolver.service";
import {CrisisCenterAuthGuard} from "../auth/crisis-center.auth.guard";


const appRoutes: Routes = [
  {
    path: 'router-index', component: IndexComponent,
    children: [
      {
        path: 'index-home', component: IndexHomeComponent,
        children: [
          {path: 'crisis-center', component: CrisisListComponent},
          {path: 'heroes', component: HeroListComponent},
        ]
      },
      {
        path: 'hero-dashboard', component: HeroDashBoardComponent,
        children: [
          {path: 'crisis-center', component: CrisisListComponent},
          {path: 'heroes', component: HeroListComponent3, data: {animation: 'heroes'}},
          {path: 'hero/:id', component: HeroDetailComponent3, data: {animation: 'hero'}}

        ]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'crises', component: ManageCrisesComponent, canDeactivate: [CanDeactivateGuard] }, // component内的canDeactivate方法
              { path: 'heroes', component: ManageHeroesComponent },
              { path: '', component: AdminDashboardComponent }
            ]
          },
          {
            path: 'crisis-center',
            component: CrisisCenterComponent,
            children: [
              {
                path: 'list',
                component: CrisisListComponentAdmin,
                children: [
                  {
                    path: ':id',
                    component: CrisisDetailComponent,
                    // canDeactivate: [CanDeactivateGuard],
                    resolve: {
                      crisis: CrisisDetailResolverService
                    }
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'crisis-center',
        loadChildren: () => import('../crisis-center/crisis-center-routing.module').then(m => m.CrisisCenterRoutingModule),
        // canLoad: [CrisisCenterAuthGuard] // 路由守卫懒加载
        data: {
          preload: true
        }
      }
    ]
  }
];

// const routes = RouterModule.forChild(appRoutes);

@NgModule({
  declarations: [
    IndexComponent,
    IndexHomeComponent,
    CrisisListComponent,
    HeroListComponent,

    // milestone3
    HeroDashBoardComponent,
    HeroListComponent3,
    HeroDetailComponent3,

    // 路由守卫
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    AdminDashboardComponent,

    CrisisCenterComponent,
    CrisisListComponentAdmin,
    CrisisListComponent,
    CrisisDetailComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    NgZorroAntdModule,
    CommonModule,
    FormsModule,
  ],
  // exports: [
  //   RouterModule
  // ]
})
export default class MilesStoneModule {
}
