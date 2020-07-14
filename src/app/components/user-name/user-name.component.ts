import { Component, OnInit } from '@angular/core';
import { UserName } from '../../models/username';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})



export class UserNameComponent implements OnInit {
  userName:UserName;
  public show:boolean = false;

  logForm(value: any) {
    console.log("This is the form value", value);
  }

  toggle() {
    this.show = !this.show;
  }

  changeName() {
    const firstNameInput = (<HTMLInputElement>document.getElementById('firstNameInput'));
    const secondNameInput = (<HTMLInputElement>document.getElementById('secondNameInput'));

    this.userName = {
      firstName: firstNameInput.value,
      secondName: secondNameInput.value
    }

    this.toggle();
  }

  constructor() {
    this.userName = {
      firstName: 'Max',
      secondName: 'Cramer'
    }
  }

  ngOnInit() {}

}
