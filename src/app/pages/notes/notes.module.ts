import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';


@NgModule({
  declarations: [
    ListNotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    AngularMaterialModule
  ]
})
export class NotesModule { }
