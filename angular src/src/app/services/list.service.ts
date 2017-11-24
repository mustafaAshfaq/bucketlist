import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { List } from '../models/List';
import   'rxjs/add/Operator/map';
@Injectable()
export class ListService {
    private serverUrI = `http://localhost:3000/`;
    constructor(private server: Http) { }
    getAllList(): Observable<List[]> {
        let UrI = `${this.serverUrI}bucketlist/`;
        return this.server.get(UrI).map(res => res.json()).map(res => <List[]>res.lists);
    }
    deleteList(id: string) {
        let UrI = `${this.serverUrI}bucketlist/${id}`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.server.delete(UrI, { headers: headers }).map(res => res.json());
    }
    addList(list: List) {
        let UrI = `${this.serverUrI}bucketlist/`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify({ title: list.title, description: list.description, category: list.category });
        console.log(body);
        return this.server.post(UrI, body, { headers: headers }).map(res => res.json());
    }
    updateList(list: List) {
        let UrI = `${this.serverUrI}bucketlist/${list._id}`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify({ title: list.title, description: list.description, category: list.category });
        console.log(body);
        return this.server.put(UrI, body, { headers: headers }).map(res => res.json());
    }
}
