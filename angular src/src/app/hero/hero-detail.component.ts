import { Component,OnInit,HostBinding } from '@angular/core';
import { Hero } from '../models/hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from './hero.service';
import { slideInDownAnimation } from '../animation';
import 'rxjs/add/operator/switchMap';

@Component({
    template: `<div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>power: </label>{{hero.powers}}
      </div>
      <div>
        <label>Nemesis: </label>
        <input [(ngModel)]="hero.nemesis" placeholder="nemesis"/>
      </div>
      <div>
            <button (click)="onBackClick()">Back</button>
            <button (click)="save()">Save</button>
      </div>
    </div>
              `,
    providers: [HeroService],
    animations: [slideInDownAnimation]
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;
    heroId: string;
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: HeroService) {

    }
    ngOnInit() {
        this.activatedRoute.paramMap.switchMap((params: ParamMap) => this.heroId = params.get('id')).subscribe(res => {
            this.service.getAllHeroes().subscribe(res => this.hero=res.find(hero => hero._id === this.heroId));   
        });
        
    }
    save() {
        this.service.updateHero(this.hero).subscribe(res => {
            console.log(res.message);
            this.router.navigate(['/heroes', { id: this.hero._id }]);
        });
    }
    onBackClick() {
        this.router.navigate(['/heroes']);
    }
}