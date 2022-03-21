import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { F1Component } from './f1/f1.component';
import { F2Component } from './f2/f2.component';


@NgModule({
  declarations: [
    LazyComponent,
    F1Component,
    F2Component
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
