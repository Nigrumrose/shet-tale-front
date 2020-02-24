import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HrComponent } from './hr/hr.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StoreComponent } from './store/store.component';
import { ExpensiveComponent } from './expensive/expensive.component';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HrComponent, SalesComponent, PurchaseComponent, StoreComponent, ExpensiveComponent, BillingComponent, ReportsComponent, HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
