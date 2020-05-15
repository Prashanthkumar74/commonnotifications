import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { login } from 'src/app/core/models/report';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Login: login;
  message:any;
 // returnUrl: string;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private authenticationService: AuthenticationService) {
    this.Login = new login();
  }
  ngOnInit() {
   // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  };
  logins(login) {
    //  alert(JSON.stringify(login));
    this.authenticationService.logins(login).subscribe((data) => {
      // console.log(data)
   //  this.router.navigate([this.returnUrl]);
    this.router.navigate(['/dashboard']);
    },(err) => {
      console.log(err)
    })
  }
}
