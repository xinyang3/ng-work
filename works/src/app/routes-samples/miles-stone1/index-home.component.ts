import {Component} from "@angular/core";

@Component({
  template: `
    <h1>路由实例demo</h1>
    <h2>子组件之间切换</h2>
    <p>
      参考<a href="https://angular.cn/guide/router#milestone-1-wrap-up">https://angular.cn/guide/router#milestone-1-wrap-up</a>
    </p>
    <nav>
      <a routerLink="./crisis-center" routerLinkActive="active">Crisis Center</a><br>
      <a routerLink="./heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export default class IndexHomeComponent {

}
