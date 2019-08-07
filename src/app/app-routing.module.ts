import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'notes', loadChildren: './pages/notes/notes.module#NotesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
