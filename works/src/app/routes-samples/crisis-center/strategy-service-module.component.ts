import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs';
import { map }                from 'rxjs/operators';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

@Component({
  selector: 'app-strategy-modules',
  template: `<p>
    <span *ngFor="let item of modules">{{item}}</span>
</p>`
})
export class StrategyServiceModuleComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    preloadStrategy: SelectivePreloadingStrategyService
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
  //   // Capture the session ID if available
  //   this.sessionId = this.route
  //     .queryParamMap
  //     .pipe(map(params => params.get('session_id') || 'None'));
  //
  //   // Capture the fragment if available
  //   this.token = this.route
  //     .fragment
  //     .pipe(map(fragment => fragment || 'None'));
  }
}
