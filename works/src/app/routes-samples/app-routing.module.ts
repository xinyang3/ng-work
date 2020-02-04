import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import PageNotFoundComponent from './page-not-found.component'

const routes: Routes = [
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export default class AppRoutingModule {}
