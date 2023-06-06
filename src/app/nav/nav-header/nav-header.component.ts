import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeserviceService } from 'src/app/services/themeservice.service';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  dark: boolean;
  menuType: string = 'overlay';
  @Output() themeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private theme: ThemeserviceService, private route: Router) {}

  ngOnInit() {
    this.dark = this.theme.setPreviousTheme();
    console.log(this.dark);
  }
  toggleDark() {
    this.theme.toggleDark();
    if (this.dark) {
      this.dark = false;
    } else {
      this.dark = true;
    }
    this.themeEvent.emit(this.dark);
  }
  goto(route: string = ''): void {
    this.route.navigate([route]);
  }
}
