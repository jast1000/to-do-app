import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  private user: any;
  formNote: FormGroup;

  constructor(
    private fb: FormBuilder,
    private noteSrv: NotesService,
    private authSrv: AuthenticationService,
    private router: Router
  ) {
    this.user = this.authSrv.getUser();
    this.formNote = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async save() {
    const userId = this.user.uid;
    const note = this.formNote.value;
    await this.noteSrv.save(userId, note);
    this.router.navigate(['notes']);
  }

}
