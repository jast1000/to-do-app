import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  private user: any;
  private note: any;
  formNote: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noteSrv: NotesService,
    private authSrv: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.user = this.authSrv.getUser();
    this.formNote = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  async ngOnInit() {
    const userId = this.user.uid;
    const noteId = +this.route.snapshot.paramMap.get('noteId');
    if(noteId) {
      this.note = await this.noteSrv.find(userId, noteId);
      const formValue = {
        title: this.note.title,
        content: this.note.content
      };
      this.formNote.setValue(formValue);
      console.log(this.note);  
    }
  }

  async save() {
    const userId = this.user.uid;
    const note = this.formNote.value;
    if (this.note) {
      await this.noteSrv.update(userId, this.note.id, note);
      this.snackBar.open("Nota actualizada", "Cerrar", { duration: 4000 });
    } else {
      await this.noteSrv.save(userId, note);
      this.snackBar.open("Nota guardada", "Cerrar", { duration: 4000 });
    }
    this.router.navigate(['notes']);
  }

}
