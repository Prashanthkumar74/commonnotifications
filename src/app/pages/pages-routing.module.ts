import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ DataComponent} from './data/data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { LoginsComponent } from './logins/logins.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {path: 'data', component:DataComponent},
  {path:'reports',component:ReportsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'categorylist',component:CategorylistComponent},
 {path:'logins',component:LoginsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
