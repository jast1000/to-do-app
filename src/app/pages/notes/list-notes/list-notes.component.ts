import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private authSrv: AuthenticationService
  ) { 
    this.user = authSrv.getUser();
  }

  ngOnInit() {
    this.getNotes();
  }

  private async getNotes() {
    this.notes = await this.notesSrv.getAll(this.user.uid);
    console.log(this.notes);
  } 

}
