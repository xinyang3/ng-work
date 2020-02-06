import {Injectable} from "@angular/core";
import {CanLoad, Route, Router, UrlSegment} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CrisisCenterAuthGuard implements CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {

  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(`router-index/${route.path}`);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['router-index/login']);
    return false;
  }
}
