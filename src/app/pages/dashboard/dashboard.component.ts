import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { EventService } from '../../core/services/event.service';
import { UserProfileService } from 'src/app/core/services/user.service';
import * as xlsx from 'xlsx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  
  tableData: any[]=[];
  constructor(private eref: ElementRef, private eventService: EventService,private userService:UserProfileService,private rtr:Router) {
  }
    Date(date) {
      console.log(date.value)
      this.userService.getDate(date.value).subscribe((data)=>{
        this.tableData=data.result
        console.log(data)
      })
    }
  

  ngOnInit() {
    this.eventService.broadcast('changePageHeading', 'Dashboard');
  }
  exportToExcel(){
    const ws: xlsx.WorkSheet =   
    xlsx.utils.json_to_sheet(this.tableData);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet');
    xlsx.writeFile(wb,'iris Report.xlsx');
   }
  ngAfterViewInit() { }
}
