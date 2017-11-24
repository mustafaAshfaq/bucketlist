import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';
@Injectable()
export class CrisisListResolver implements Resolve<Crisis[]> {
    constructor(private crisis: CrisisService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis[]> {
        return this.crisis.getCrisisList();
    }
}