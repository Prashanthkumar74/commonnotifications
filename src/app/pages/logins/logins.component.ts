import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/core/models/report';
import { UserProfileService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent implements OnInit {
Login:login;
//SUi_loginName:any;
  constructor(private userService:UserProfileService,private router:Router) { 
this.Login= new login();
  }
  ngOnInit() {
  }
  logins(login){
    this.userService.logins(login).subscribe((data) => {
    console.log(data)
      this.router.navigate(['/dashboard'])

    })
  }
  // btnclick(userid, password, myfrm) {
  //   if (myfrm.valid) {
  //     var u = userid.value;
  //     var p = password.value;
  //     this.userService.logins(u).subscribe((data) => {
  //       this.Login = data;
  //       console.log(data)

  //       if (data.length > 0) {
  //         let x = data[0].emailid
  //         let y = data[0].typeofuser;
  //         alert(x + ' ' + y)
  //         alert('Login Success')
  //         localStorage.setItem('userId', u);
  //         localStorage.setItem('emailId', x);
  //         localStorage.setItem('typeOfUser', y);
  //         if (y == 'user') {
  //           this.router.navigate(['/data'])
  //         }
  //         else if (y == 'client') {
  //           this.router.navigate(['chome'])
  //         }
  //         else if (y == 'admin') {
  //           this.router.navigate(['/dashboard'])
  //         }
  //         // location.reload()
  //       }
  //       else {
  //         alert('Invalid user')
  //       }
  //     })
  //   }
  //   else {
  //     alert('enter details....')
  //   }
  // }


}
