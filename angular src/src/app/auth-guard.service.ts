import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable} from 'rxjs/Observable';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

    constructor(private auth: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        console.log('guard active');
        return this.checkLogin(state.url);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
    canLoad(route: Route): boolean {
        let url: string = `/${route.path}`;
        return this.checkLogin(url);
    }
    checkLogin(url: string): boolean {
        if (this.auth.isLoggedIn)
            return true;
        this.auth.redirectUrl = url;
        let navExtras: NavigationExtras = {
            queryParams: { 'session_id': '1234453' },
            fragment: 'anchor'

        }
        this.router.navigate(['/login'], navExtras);
        return false;
    }

}
