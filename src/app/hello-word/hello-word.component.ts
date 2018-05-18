import { Component, OnInit } from '@angular/core';

@Component({ //component decorator metadata added to our code
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {

  constructor() { } 

  ngOnInit() {
  }

}
