import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ngw3AccordionItemComponent } from './accordion-item/ngw3-accordion-item.component';
import { Ngw3AccordionTitleComponent } from './accordion-item/ngw3-accordion-title.component';
import { Ngw3AccordionContentComponent } from './accordion-item/ngw3-accordion-content.component';
import { Ngw3AccordionComponent } from './accordion/ngw3-accordion.component';


@NgModule({
  declarations: [
    Ngw3AccordionItemComponent,
    Ngw3AccordionTitleComponent,
    Ngw3AccordionContentComponent,
    Ngw3AccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Ngw3AccordionItemComponent,
    Ngw3AccordionTitleComponent,
    Ngw3AccordionContentComponent,
    Ngw3AccordionComponent
  ]
})
export class Ngw3AccordionModule { }
