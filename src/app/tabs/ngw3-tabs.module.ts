import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ngw3TabsComponent } from './tabs/ngw3-tabs.component';
import { Ngw3TabComponent } from './tab/ngw3-tab.component';
import { Ngw3ButtonModule } from '../button/ngw3-button.module';



@NgModule({
  declarations: [
    Ngw3TabsComponent,
    Ngw3TabComponent
  ],
  imports: [
    CommonModule,
    Ngw3ButtonModule
  ],
  exports: [
    Ngw3TabsComponent,
    Ngw3TabComponent
  ]
})
export class Ngw3TabsModule { }
