import { Component, OnInit } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';
@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
    list: List[]=[];

    constructor(private listService: ListService) { }

    ngOnInit() {
        this.loadLists();
  }
    loadLists() {
        this.listService.getAllList().subscribe(res => this.list = res);
    }
    deleteList(list: List) {
        this.listService.deleteList(list._id).subscribe(res => {
            if (res.success==true)
                this.list = this.list.filter(item => item !== list);
        });
    }
    onAddList(item: List) {
        this.list.push(item);
    }
}
