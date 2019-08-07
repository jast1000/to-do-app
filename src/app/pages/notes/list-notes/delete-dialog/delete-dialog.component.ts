import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  data = { result: true };

  constructor(
    private dialog: MatDialogRef<DeleteDialogComponent>
  ) { }

  ngOnInit() {
  }

  close() {
    this.dialog.close(false);
  }

}
