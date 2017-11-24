import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class DialogService {

    confirm(msg?:string): Observable<boolean> {
        const selection = window.confirm(msg || 'please confirm');
        return Observable.of(selection);
    }
}
