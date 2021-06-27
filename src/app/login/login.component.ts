import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;;
  

  constructor(private authService : AuthService,
      private router: Router) { }
  

  ngOnInit() {
  }

  onLoggedin(){
    console.log(this.user);
       let isValidUser: Boolean = this.authService.SignIn(this.user);
      if (isValidUser)
         this.router.navigate(['/dashboard']);
      else
       alert('Login ou mot de passe incorrecte!');
      
      
  }

}