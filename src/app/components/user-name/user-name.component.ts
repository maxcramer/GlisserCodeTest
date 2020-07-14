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
      this.firstName = "Hide"
    } else {
      this.firstName = "Show";
    }
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
