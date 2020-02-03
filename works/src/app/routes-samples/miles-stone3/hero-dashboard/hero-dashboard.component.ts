import {Component} from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  templateUrl: './hero-dashboard.component.html',
  styles: [],
  animations: [ slideInAnimation ]
})
export class HeroDashBoardComponent {
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
