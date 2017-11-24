import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
import { DialogService } from '../dialog.service';
@Component({
    selector: 'crisis-detail',
    template: `<div *ngIf="crisis"> <h2> Crisis !{{name}} </h2>
                <input type="text" [(ngModel)]="name">
                <button type="button" class='button' (click)="save()">Save</button>
                <button type="button" class='button' (click)="back()">Cancel</button>
               </div>
                `
})

export class CrisisDetailComponent implements OnInit {
    crisis: Crisis;
    id: string;
    name: string;
    constructor(private service: CrisisService, private route: ActivatedRoute, private router: Router, private dialog: DialogService) { }
    ngOnInit() {
         this.route.paramMap.switchMap((params: ParamMap) => this.id = params.get('id')).subscribe(res =>
             this.service.getCrisisList().subscribe(res => {
                 this.crisis = res.find(cr => cr.id === +this.id)
                 this.name = this.crisis.name;
             }))
    }
    save() {
        this.crisis.name = this.name;
        this.back()
    }
    back() {
        this.router.navigate(['../', { id: this.crisis.id }], { relativeTo: this.route });
    }
    canDeactivate(): Observable<boolean> | boolean {
        if (!this.crisis || (this.crisis.name === this.name))
            return true;
        return this.dialog.confirm("do you want to cancel changes");
    }
}