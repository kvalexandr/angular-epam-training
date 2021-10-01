import { AuthService } from './../../services/auth.service';
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
  public userLogin: string = '';
  public userIsAuth: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userIsAuth = this.authService.isAuth();
    if(this.userIsAuth) {
      const userInfo = this.authService.getUserInfo();
      this.userLogin = userInfo.email;
    }
  }

  public logoutUser() {
    this.authService.logout();
  }

}
