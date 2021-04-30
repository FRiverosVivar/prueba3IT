import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MainpageRoutingModule } from './mainpage-routing.module'
import { MainpageComponent } from '../mainpage/mainpage.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
  ],
  imports: [
    MainpageRoutingModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [MainpageComponent]
})
export class MainpageModule { }