import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../models/userinfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo:UserInfo;
  public show:boolean = false;

  logForm(value: any) {
    console.log(value);
  }

  toggle() {
    this.show = !this.show;
  }

  changeBio() {
    const bioInput = (<HTMLInputElement>document.getElementById('bioInput'));

    this.userInfo = {
      bio: bioInput.value
    }

    this.toggle();
  }



  constructor() {
    this.userInfo = {
      bio: 'Bacon ipsum dolor amet flank culpa ex, quis commodo ea pork belly ham bacon incididunt landjaeger pig laborum ut. Velit aliquip minim duis do laboris ut ball tip tenderloin ad. Consectetur pork capicola occaecat esse tempor mollit. In burgdoggen exercitation, ground round ut chuck pig voluptate. Chicken ribeye dolore porchetta aliqua salami in cupim flank turkey pancetta. Jerky filet mignon capicola turkey enim sint nostrud magna leberkas ex biltong. Tenderloin beef ribs cow pork belly cupim pork.'
    }
   }

  ngOnInit() {}

}
