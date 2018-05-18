import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
@Input() nameUser: string; //add name property to class UserItemComponent
  constructor() {
    // this.name = 'Louise';  //set the name
   }

  ngOnInit() {
  }

}
