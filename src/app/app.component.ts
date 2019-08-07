import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  label: string = "No me des click";
  personajes: any[] = [
    { titulo: "Benito Juarez", descripcion: "Blabla..."},
    { titulo: "Miguel Hidalgo", descripcion: "Blabla..."},
    { titulo: "Juan Gabriel", descripcion: "asdasd"}
  ];

  darClick() {
    this.label = "Ya me diste click!!!";
  }

}
