import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class NavFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  year() {
    let date = new Date();
    return date.getFullYear() + 1;
  }
}
