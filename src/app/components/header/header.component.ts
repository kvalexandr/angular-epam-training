import { Component, OnInit } from '@angular/core';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faUser = faUser;
  public faSign = faSignInAlt;
  public userLogin: string = 'User login';

  constructor() { }

  ngOnInit(): void {
  }

}
