import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgbdModule } from './ngbootstrap.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgbdModule
  ],
  exports: [
    CommonModule,
    FormsModule, 
    MaterialModule,
    NgbdModule
  ]
})
export class SharedModule { }
