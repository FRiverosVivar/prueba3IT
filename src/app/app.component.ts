import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UsersComponent } from './pages/users/users.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulaTest';
  constructor(
    private router: Router,
  ){

  }
  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['users'],{replaceUrl: true})
    }),1000
  }
}
