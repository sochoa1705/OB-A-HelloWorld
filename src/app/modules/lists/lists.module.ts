import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';



@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //Component exportation, so that they can be used in other modules
    BasicListComponent
  ]
})
export class ListsModule { }
