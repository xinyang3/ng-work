import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export default class IndexComponent implements OnInit {
  menus: Object[];
  constructor (public router: Router,
               public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.menus = [{
      name: '里程碑1',
      path: 'router-index/index-home'
    }, {
      name: '里程碑1',
      path: 'index-home'
    }, {
      name: '里程碑1',
      path: 'index-home'
    }]
  }

  onclick(item) {
    this.router.navigateByUrl(item.path, {queryParams: {'key': 'abc'}});
  }
}
