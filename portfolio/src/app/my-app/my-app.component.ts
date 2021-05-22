
import { Component, OnInit } from '@angular/core';
import { APPS } from 'src/environments/apps';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {

  apps = APPS;

  constructor() { }

  ngOnInit(): void {
  }

}
