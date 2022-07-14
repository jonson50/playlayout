import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ngw3CardComponent } from './card/ngw3-card.component';
import { Ngw3CardHeaderComponent } from './ngw3-card-header/ngw3-card-header.component';
import { Ngw3CardFooterComponent } from './ngw3-card-footer/ngw3-card-footer.component';
import { Ngw3CardBodyComponent } from './ngw3-card-body/ngw3-card-body.component';
import { CColorDirective } from './c-color.directive';
import { W3CardDirective } from './w3-card.directive';
import { RippleEffectDirective } from './ripple-effect.directive';

@NgModule({
  declarations: [
    Ngw3CardComponent,
    Ngw3CardHeaderComponent,
    Ngw3CardFooterComponent,
    Ngw3CardBodyComponent,
    CColorDirective,
    W3CardDirective,
    RippleEffectDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Ngw3CardComponent,
    Ngw3CardHeaderComponent,
    Ngw3CardFooterComponent,
    Ngw3CardBodyComponent,
    CColorDirective,
    W3CardDirective,
    RippleEffectDirective
  ]
})
export class Ngw3CardModule { }
