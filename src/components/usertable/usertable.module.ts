import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsertableComponent } from './usertable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UsertableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    UsertableComponent,
  ]
})
export class UsertableModule { }
