import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeserviceService {
  private _selectedTheme = '';
  renderer: Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }
  toggleDark() {
    const hasClass = this.document.body.classList.contains('dark-theme');
    if (hasClass) {
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.renderer.addClass(this.document.body, 'light-theme');
      localStorage.setItem('theme', 'light-theme');
    } else {
      this.renderer.addClass(this.document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    }
  }

  setPreviousTheme() {
    let theme = localStorage.getItem('theme');
    if (theme && theme == 'dark-theme') {
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.renderer.removeClass(this.document.body, 'light-theme');
      return true;
    }
    return false;
  }
}
