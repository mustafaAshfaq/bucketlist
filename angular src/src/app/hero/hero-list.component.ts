import { Component, OnInit,ViewChild } from '@angular/core';
import { HeroService } from './hero.service';
import { Router} from '@angular/router';
import { Hero } from '../models/hero';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css'],
    providers: [HeroService]
})

export class HeroListComponent implements OnInit {
    heroes: Observable<Hero[]>;
    newHero: Hero;
    @ViewChild('heroForm') currentForm:any;
    constructor(private hs: HeroService, private router: Router) { }
    ngOnInit() {
        this.getHeroes();
        this.newHero = { name: '', powers: '', nemesis: '' };
    }
    getHeroes() {
        this.heroes = this.hs.getAllHeroes();//.subscribe(res => this.heroes = res);
    }
    onSelect(hero: Hero) {
        this.newHero = hero;
        this.router.navigate(['/hero', hero._id])
    }
    onSubmit(heroForm) {
        const form = heroForm.form;
        if (this.currentForm.form.values!==null)
            this.hs.addHero(this.newHero).subscribe(res => {
                if (res.success) {
                    console.log(res.message);
                    this.getHeroes();
                    this.newHero = { name: '', powers: '', nemesis: '' };
                }
                else
                    console.log(res.message);
            }
            
      );
       else
            console.log('form invalid');
    }
   
}