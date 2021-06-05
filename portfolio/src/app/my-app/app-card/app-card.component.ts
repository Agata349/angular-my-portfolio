import { Component, Input, OnInit } from '@angular/core';
import { App } from 'src/app/model/apps-UI';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {

  @Input()
  app!:App;

  constructor() { }

  ngOnInit(): void {
  }

}

