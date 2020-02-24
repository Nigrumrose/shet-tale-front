import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './shettale/admin/admin.component';
import { AdminModule } from './shettale/admin/admin.module';
import { AdminRoutingModule } from './shettale/admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
