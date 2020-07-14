import { Component, OnInit, Input } from '@angular/core';
import { UserName } from '../../models/username';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  userName:UserName[];
  public show:boolean = false;
  public firstName: any = 'Show';
  public secondName: any = 'Show';

  toggle() {
    this.show = !this.show;

    if(this.show) {
      this.firstName = ""
    } else {
      this.firstName = "";
    }
  }

  changeName() {
    this.firstName = this.firstName;
    this.secondName = this.secondName;
    console.log(this.firstName, this.secondName);
  }

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
