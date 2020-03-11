import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/components/header/header.module';
import { SidenavModule } from 'src/components/sidenav/sidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsertableModule } from 'src/components/usertable/usertable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidenavModule,
    HeaderModule,
    UsertableModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
