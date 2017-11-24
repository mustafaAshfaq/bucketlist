import { Injectable } from '@angular/core';
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class SelectivePreloadStrat implements PreloadingStrategy {
    preloadModules: string[]=[];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            this.preloadModules.push(route.path);
            return load();
        }
        else
            return Observable.of(null);
    }
}
