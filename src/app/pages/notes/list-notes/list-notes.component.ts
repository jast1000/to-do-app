import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  private user: any;
  notes: any;

  constructor(
    private notesSrv: NotesService,
    private authSrv: AuthenticationService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) { 
    this.user = this.authSrv.getUser();
  }

  ngOnInit() {
    this.getNotes();
  }

  private async getNotes() {
    try {
      this.notes = await this.notesSrv.getAll(this.user.uid);
    } catch (ex) {
      this.snackBar.open("Ocurrio un error al listar las notas", "Cerrar", { duration: 4000 }); 
    }
  } 

  delete(noteId: number) {
    const userId = this.user.uid;
    const config = { width: "250px" };
    const dialog = this.matDialog.open(DeleteDialogComponent, config);
    dialog.afterClosed().subscribe(async result => {
      if (!result) return;
      try {
        await this.notesSrv.delete(userId, noteId);
        await this.getNotes();
      this.snackBar.open("Nota eliminada", "Cerrar", { duration: 4000 });
      } catch (ex) {
        this.snackBar.open("Ocurrio un error al eliminar la nota", "Cerrar", { duration: 4000 });
      }
    });
  }


}
