import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../models/List';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
    newList: List;
    @Output() addList: EventEmitter<List> = new EventEmitter<List>();
    constructor(private service: ListService) { }

    ngOnInit() {
        this.newList = {
            title: '',
            category: '',
            description: '',
            _id: ''

        }
            ;
  }
  onSubmit() {
      this.service.addList(this.newList).subscribe(res => {
          if (res.success == true) {
              this.addList.emit(this.newList);
              this.newList = {
                  title: 'abcbd',
                  category: '',
                  description: '',
                  _id: ''

              };
          }
          else
              console.log(res.message);
          
      });
    }
    get diagnostic() { return JSON.stringify(this.newList); }

}
