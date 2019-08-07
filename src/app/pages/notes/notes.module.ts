import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { DeleteDialogComponent } from './list-notes/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    ListNotesComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    AngularMaterialModule
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class NotesModule { }
