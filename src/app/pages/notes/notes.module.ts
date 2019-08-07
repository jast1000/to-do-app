import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { DeleteDialogComponent } from './list-notes/delete-dialog/delete-dialog.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListNotesComponent,
    DeleteDialogComponent,
    NewNoteComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class NotesModule { }
