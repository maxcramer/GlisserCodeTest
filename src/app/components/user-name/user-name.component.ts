import { Component, OnInit, Input } from '@angular/core';
import { UserName } from '../../models/username';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  userName:UserName{};
  public show:boolean = false;
  public firstName: any = 'Show';
  public secondName: any = 'Show';

  toggle() {
    this.show = !this.show;

    if(this.show) {
      this.firstName = "",
      this.secondName = ""
    } else {
      this.firstName = "Show",
      this.secondName = "Show"
    }
  }

  changeName() {
    this.firstName = this.firstName.value;
    this.secondName = this.secondName.value;
    this.toggle();
    console.log(this.userName);
  }

  constructor() { }

  ngOnInit() {
    this.userName = {
        firstName: 'Max',
        secondName: 'Cramer'
    },
    this.userNameEdit = {
        firstName: 'Max',
        secondName: 'Cramer'
    }
  }
}
