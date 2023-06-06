import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  dark: boolean;
  constructor() {}

  ngOnInit() {}
  setTheme(event) {
    this.dark = event;
  }
}
