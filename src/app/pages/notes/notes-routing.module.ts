import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { FirebaseAuthGuard } from '../../guards/firebase-auth.guard';

const routes: Routes = [
  { path: '', component: ListNotesComponent, canActivate: [FirebaseAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
