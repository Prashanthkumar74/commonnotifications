import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/app/core/models/report';
import { UserProfileService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  data: data;
  message: any;
  title: any;
  url: any;
  categories: any;
  totalData: any[] = [];
token:any;
  constructor(private rtr: Router, private userService: UserProfileService) {
    this.data = new data()

  }

  getcategory() {
    //console.log(SUi_desinationCode.value)
    this.userService.getcategory().subscribe((data) => {
     // console.log(this.totalData);
      this.totalData = data
    })
  }
  ngOnInit() {
    this.getcategory();
  }
  adddetails(sendFcmNotification) {
    console.log('det==', sendFcmNotification)
    //  alert(category);
    this.userService.adddetails(sendFcmNotification).subscribe((data) => {
      //console.log(data);
      console.log(sendFcmNotification);
    }, (err) => {
      console.log(err)
    })
  }
  
}

