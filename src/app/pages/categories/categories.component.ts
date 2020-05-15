import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  totalData:any[] = [];
  constructor(private userService:UserProfileService,private router:Router) { }
  getmastercategories() {
    this.userService.getmastercategories().subscribe((data) => {
      console.log(this.totalData);
      this.totalData=data
    })
  }
  ngOnInit() {
    this.getmastercategories();
  }
}
