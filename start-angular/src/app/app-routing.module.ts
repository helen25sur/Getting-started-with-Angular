import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductListComponent } from './app-product-list/app-product-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
