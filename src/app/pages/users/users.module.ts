import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
  ],
  imports: [
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class UsersModule { }