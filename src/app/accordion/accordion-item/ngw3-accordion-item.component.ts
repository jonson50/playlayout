import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ngw3-accordion-item',
  templateUrl: './ngw3-accordion-item.component.html',
  styleUrls: ['./ngw3-accordion-item.component.scss'],
  animations: [
    trigger('contentExpansion', [
      state(
        'expanded',
        style({ height: '*', opacity: 1, visibility: 'visible' })
      ),
      state(
        'collapsed',
        style({ height: '0px', opacity: 0, visibility: 'hidden' })
      ),
      transition(
        'expanded <=> collapsed',
        animate('200ms cubic-bezier(.37,1.04,.68,.98)')
      ),
    ]),
  ],
})
export class Ngw3AccordionItemComponent {
  private animating = false;

  @Input() isExpanded = false;
  @Input() disabled = false;
  @Output() toggled: EventEmitter<any> = new EventEmitter<any>();
  @Output() opened: EventEmitter<any> = new EventEmitter<any>();
  @Output() collapsed: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('title')
  title!: ElementRef;
  nativeElement: any;

  @ViewChild('item')
  item!: ElementRef;

  toggle() {
    if (!this.disabled) {
      if (this.animating) return;
      this.animating = true;
      //this.isExpanded = !this.isExpanded;
      this.toggled.next(this);
    }
  }

  onExpansionDone() {
    this.animating = false;
  }
}
