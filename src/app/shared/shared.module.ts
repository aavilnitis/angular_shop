import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonBasicComponent } from './button-basic/button-basic.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonBasicComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonBasicComponent
  ]
})
export class SharedModule { }