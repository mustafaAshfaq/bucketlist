import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { CrisisService } from './crisis.service';
import { Crisis } from './crisis';
@Component({
    selector: 'crisis-list',
    template: `<div>
               <ul>
                    <li *ngFor="let crisis of crisisList | async; let i=index;">
                        <a [routerLink]="[crisis.id]" [class.selected]="isSelected(crisis)">
                            <span class="badge">{{ crisis.id }}</span>
                            {{ crisis.name }}
                        </a>

                    </li>
               </ul>
               </div>
<router-outlet></router-outlet>
`
})

export class CrisisListComponent implements OnInit {
    crisisList: Observable<Crisis[]>;
    crisisId: number;
    constructor(private route: ActivatedRoute, router: Router, private crisisSer: CrisisService) { }

    ngOnInit() {
        this.crisisList = this.route.paramMap.switchMap((params: ParamMap) => {
            this.crisisId = +params.get("id");
            return this.route.data.map(data => data['crisisList']);//.crisisSer.getCrisisList();
        });

    }
    isSelected(crisis: Crisis) {
        return this.crisisId === crisis.id;
    }
}