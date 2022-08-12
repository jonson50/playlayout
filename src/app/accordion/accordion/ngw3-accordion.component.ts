import { AfterContentInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';
import { Ngw3AccordionItemComponent } from '../accordion-item/ngw3-accordion-item.component';

@Component({
  selector: 'ngw3-accordion',
  templateUrl: './ngw3-accordion.component.html',
  styleUrls: ['./ngw3-accordion.component.scss']
})
export class Ngw3AccordionComponent implements AfterContentInit {

  @ContentChildren(Ngw3AccordionItemComponent)
  items!: QueryList<Ngw3AccordionItemComponent>;

  activedItem:Ngw3AccordionItemComponent | undefined

  @Input() collapsing = false;

  constructor() { }

  ngAfterContentInit(): void {
    this.items.forEach(item => {
      item.toggled.subscribe( (itemc:ElementRef) => {
        if(this.collapsing) {
          this.collapseAllExcept(item);
        }
        item.isExpanded = !item.isExpanded;
      });
      // listening to the opened event from Item
      item.opened.subscribe((itemc:ElementRef) => {

      });
      // listening to the collapsed event from Item
      item.collapsed.subscribe((itemc:ElementRef) => {

      })
    });
  }

  private collapseAllExcept(_item:Ngw3AccordionItemComponent){
    this.items.forEach(item => {
      if(item !== _item) item.isExpanded = false;
    });
  }

  collapseAll(){
    this.items.forEach(item => {
      item.isExpanded = false;
    });
  }

  collapseItem() {

  }

}
