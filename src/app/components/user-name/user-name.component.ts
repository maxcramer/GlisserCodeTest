import { Component, OnInit } from '@angular/core';
import { UserName } from '../../models/username';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  userName:UserName[];

  constructor() { }

  ngOnInit() {
    this.userName = [
      {
        firstName: 'Max',
        secondName: 'Cramer',
        completed: false
      }
    ]
  }

}
