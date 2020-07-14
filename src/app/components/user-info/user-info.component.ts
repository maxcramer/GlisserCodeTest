import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../models/userinfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo:UserInfo[];
  public show:boolean = false;
  public bio: any = 'Show';

  toggle() {
    this.show = !this.show;

    if(this.show) {
      this.bio = "Hide"
    } else {
      this.bio = "Show";
    }
  }
  constructor() { }

  ngOnInit() {
    this.userInfo = [
      {
        bio: 'Bacon ipsum dolor amet pork aute ullamco, brisket pork chop ut hamburger ut. Id chislic buffalo corned beef pig. Short ribs strip steak porchetta sunt laboris short loin meatloaf magna eu deserunt veniam bacon proident. Turkey in proident voluptate incididunt ribeye exercitation esse shank. Chuck aliquip consectetur alcatra buffalo. In dolor tail, labore pastrami sirloin eiusmod ut nulla tenderloin filet mignon officia fatback. Commodo exercitation dolore tenderloin.'
      }
    ]
  }

}
