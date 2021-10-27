import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faUser = faUser;
  public faSign = faSignInAlt;
  public userName: string = '';
  public userIsAuth: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userIsAuth = this.authService.isAuth();
    if(this.userIsAuth) {
      this.authService.getUserInfo().subscribe(user => {
        this.userName = `${user.name.first} ${user.name.last}`;
      });
    }
  }

  public logoutUser() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
