/* tslint:disable: max-line-length */
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';


export const routes: Routes = [
  { path: '', loadChildren: './website/index#WebsiteModule' },
  { path: '**', component: NotFound404Component }
];
