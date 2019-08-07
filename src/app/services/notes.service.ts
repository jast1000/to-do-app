import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl = environment.toDoApi;

  constructor(
    private http: HttpClient
  ) { }

  getAll(userId: string) {
    const url = `${ this.baseUrl }/users/${ userId }/notes`;
    return this.http.get(url).toPromise();   
  }

  find(userId: string, noteId: number) {
    const url = `${ this.baseUrl }/users/${ userId }/notes/${ noteId }`;
    return this.http.get(url).toPromise();
  }

  save(userId: string, note: any) {
    const url = `${ this.baseUrl }/users/${ userId }/notes`;
    return this.http.post(url, note).toPromise();
  }

  update(userId: string, noteId: number, note: any) {
    const url = `${ this.baseUrl }/users/${ userId }/notes/${ noteId }`;
    return this.http.put(url, note).toPromise();
  }

  delete(userId: string, noteId: number) {
    const url = `${ this.baseUrl }/users/${ userId }/notes/${ noteId }`;
    return this.http.delete(url).toPromise();
  }

}
