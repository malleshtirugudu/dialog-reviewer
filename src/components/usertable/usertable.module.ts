import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertableComponent } from './usertable.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [UsertableComponent],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    UsertableComponent,
  ]
})
export class UsertableModule { }
