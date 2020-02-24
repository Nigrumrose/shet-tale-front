import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { HrComponent } from './hr/hr.component';
import { BillingComponent } from './billing/billing.component';
import { ExpensiveComponent } from './expensive/expensive.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  {
    path: 'admin',component: AdminComponent,
    children:[
      {
        path:'' ,component:HomeComponent
      },
      {
        path:'home' ,component:HomeComponent
      },
      {
        path:'hr' ,component:HrComponent
      },
      {
        path:'billing' ,component:BillingComponent
      },
      {
        path:'expensive' ,component:ExpensiveComponent
      },
      {
        path:'purchase' ,component:PurchaseComponent
      },
      {
        path:'reports' ,component:ReportsComponent
      },
      {
        path:'sales' ,component:SalesComponent
      },
      {
        path:'store' ,component:StoreComponent
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
