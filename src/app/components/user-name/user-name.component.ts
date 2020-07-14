import { Component, OnInit, Input } from '@angular/core';
import { UserName } from '../../models/username';
import { UserNameEdit } from '../../models/usernameedit';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})



export class UserNameComponent implements OnInit {
  userName:UserName;
  editUserName: UserNameEdit;
  public show:boolean = false;

  logForm(value: any) {
    console.log("This is the form value", value);
  }

  toggle() {
    this.show = !this.show;
  }


  changeName() {
    let firstNameInput = document.getElementById('#firstNameInput');

    this.userName = this.editUserName;
    this.toggle();
    console.log(this.userName);
    console.log(firstNameInput)
  }

  constructor() {

   }

  ngOnInit() {
    this.userName = {
        firstName: 'Max',
        secondName: 'Cramer'
    },

    this.editUserName = {
        firstName: 'firstname',
        secondName: 'Surname'

    }
  }
}
