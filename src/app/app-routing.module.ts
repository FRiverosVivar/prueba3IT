import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        loadChildren: () => import('./pages/users/users.module').then( m => m.UsersModule),
      },{
        path: 'mainpage',
        loadChildren: () => import('../app/pages/mainpage/mainpage.module').then( m => m.MainpageModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
