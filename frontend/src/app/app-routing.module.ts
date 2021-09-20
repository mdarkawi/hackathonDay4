import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from "./user/account/account.component";
import {ArticlesComponent} from "./articles/articles.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: 'compte',
    component: AccountComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
