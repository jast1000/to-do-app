import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { NewNoteComponent } from './new-note/new-note.component';

const routes: Routes = [
  { path: '', component: ListNotesComponent },
  { path: 'new-note', component: NewNoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
