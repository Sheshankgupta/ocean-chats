import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NavFooterComponent } from './nav-footer/footer.component';

@NgModule({
  declarations: [NavHeaderComponent, NavFooterComponent],
  imports: [CommonModule, IonicModule],
  exports: [NavHeaderComponent, NavFooterComponent],
})
export class NavModule {}
