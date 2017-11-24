import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }
    message: string;
  ngOnInit() {
  }
  login() {
      this.authService.login().subscribe(val => {
          this.message = 'login successfull';
          if (this.authService.isLoggedIn) {
              if (this.authService.redirectUrl !== '') {
                  let navExtras: NavigationExtras = {
                      queryParamsHandling: 'preserve',
                      preserveFragment: true
                  }
                  this.router.navigate([this.authService.redirectUrl], navExtras);
              }
              else
                  this.router.navigate(['/crisis-center/admin']);
          }

      });
  }
  logout() {
      this.message = 'logging out';
      this.authService.logout();
  }

}
