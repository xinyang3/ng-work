import {Component} from "@angular/core";

@Component({
  template: `
    <h1>Angular Router</h1>
    <h2>子组件之间切换</h2>
    <nav>
      <a routerLink="./crisis-center" routerLinkActive="active">Crisis Center</a><br>
      <a routerLink="./heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export default class IndexHomeComponent {

}
