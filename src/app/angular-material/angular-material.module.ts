import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }
