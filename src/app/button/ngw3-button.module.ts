import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleEffectDirective } from './ripple-effect.directive';
import { Ngw3ButtonDirective } from './ngw3-button.directive';
import { Ngw3FlatButtonDirective } from './ngw3-flat-button.directive';
import { Ngw3IconButtonDirective } from './ngw3-icon-button.directive';

@NgModule({
  declarations: [
    RippleEffectDirective,
    Ngw3ButtonDirective,
    Ngw3FlatButtonDirective,
    Ngw3IconButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RippleEffectDirective,
    Ngw3ButtonDirective,
    Ngw3FlatButtonDirective,
    Ngw3IconButtonDirective
  ]
})
export class Ngw3ButtonModule { }
