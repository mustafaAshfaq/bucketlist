import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../models/hero';
import 'rxjs/add/Operator/map';
@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    private serverUrI = `http://localhost:3000/`;
    getAllHeroes(): Observable<Hero[]> {
        return this.http.get(`${this.serverUrI}herolist/`).map(res => res.json()).map(res => <Hero[]>res.lists);
    }
    addHero(hero: Hero) {
        let body = JSON.stringify({ name: hero.name, powers: hero.powers, nemesis: hero.nemesis });
        console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.serverUrI}herolist/`, body, { headers: headers }).map(res => res.json());
    }
    deleteHero(id: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(`${this.serverUrI}herolist/${id}`, { headers: headers }).map(res => res.json());
    }
    updateHero(hero: Hero) {
        let UrI = `${this.serverUrI}herolist/${hero._id}`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify({ name: hero.name, powers: hero.powers, nemesis: hero.nemesis });
        console.log(body);
        return this.http.put(UrI, body, { headers: headers }).map(res => res.json());
    }
}