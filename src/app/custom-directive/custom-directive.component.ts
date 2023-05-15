import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
green: any;

  constructor() { }

  ngOnInit(): void {
  }
  isClicked=false;
number=23;
onClick(){
  this.isClicked=!this.isClicked;
}

}
