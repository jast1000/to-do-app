import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';

const routes: Routes = [
  { path: '', component: ListNotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
