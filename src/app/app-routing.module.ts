import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseAuthGuard } from './guards/firebase-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'notes', loadChildren: './pages/notes/notes.module#NotesModule', canActivate: [FirebaseAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
