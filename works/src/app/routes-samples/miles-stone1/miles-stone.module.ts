import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {RouterModule, Routes} from "@angular/router";
import CrisisListComponent from './crisis-list.component';
import HeroListComponent from './hero-list.component';
import IndexComponent from './index.component';
import IndexHomeComponent from './index-home.component';

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
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    NgZorroAntdModule,
    CommonModule
  ],
  // exports: [
  //   RouterModule
  // ]
})
export default class MilesStoneModule {
}
