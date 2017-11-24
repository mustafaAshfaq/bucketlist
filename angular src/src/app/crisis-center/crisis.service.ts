import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/Of'
import { Crisis, CRISES } from './crisis';


@Injectable()
export class CrisisService {
    crisisList: Observable<Crisis[]>;
    getCrisisList(): Observable<Crisis[]> {
        this.crisisList = 
            Observable.create(observer => {
            setTimeout(() => {
                observer.next(CRISES);
                observer.complete();
                //if (i = CRISES.length - 1) {
                //    observer.next(crisis);
                //    observer.complete();
                //}
                //else if (i < CRISES.length) {
                //    observer.next(crisis);
                //}
            }, 1000);
        });
        
        return this.crisisList;
    }
}