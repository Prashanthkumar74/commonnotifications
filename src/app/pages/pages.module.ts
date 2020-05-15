import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from '../shared/ui/ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ DataComponent} from './data/data.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from './reports/reports.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { LoginsComponent } from './logins/logins.component';
@NgModule({
  declarations: [DashboardComponent,DataComponent,ReportsComponent,CategoriesComponent,CategorylistComponent,LoginsComponent],
  imports: [
    CommonModule,
    NgbDropdownModule,
    UIModule,
    PagesRoutingModule,
    FormsModule,  
  ]
})
export class PagesModule { }
