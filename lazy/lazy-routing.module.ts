import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F1Component } from './f1/f1.component';
import { F2Component } from './f2/f2.component';
import { LazyComponent } from './lazy.component';

const routes: Routes = [{ path: '', component: LazyComponent },{ path: 'ficom', component: F1Component }
,{ path: 'fcome', component: F2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
