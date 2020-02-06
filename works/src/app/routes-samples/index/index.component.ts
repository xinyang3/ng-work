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
      name: '路由起步',
      path: 'router-index/index-home'
    }, {
      name: '英雄列表',
      path: 'router-index/hero-dashboard'
    }, {
      name: '路由守卫',
      path: 'router-index/admin'
    }, {
      name: '危机中心',
      path: 'router-index/crisis-center'
    }]
  }

  onclick(item) {
    this.router.navigateByUrl(item.path, {queryParams: {'key': 'abc'}});
  }
}
