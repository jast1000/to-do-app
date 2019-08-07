import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-description',
  templateUrl: './title-description.component.html',
  styleUrls: ['./title-description.component.scss']
})
export class TitleDescriptionComponent implements OnInit {
  
  @Input() datos: any;
  visible: boolean = true;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  ocultarMostrar() {
    this.visible = !this.visible;
  }
}