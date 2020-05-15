import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/core/models/report';
import { UserProfileService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
category:category;

  constructor(private userService:UserProfileService,private router:Router) { 
    this.category=new category()
  }
  add(category){ 
   alert(category);
    this.userService.addcategory(category).subscribe((data)=>{
      this.ngOnInit();
      this.router.navigate(['/categories'])
      console.log(data);
      console.log(category);
    },(err) => {
      console.log(err)
    })
  }
  ngOnInit() {
  }

}
