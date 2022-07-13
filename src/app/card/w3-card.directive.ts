import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[w3Card]',
})
export class W3CardDirective implements OnInit {

  @Input()
  w3Card: string | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let firstChild = this.el.nativeElement.firstChild.firstChild;
    let lastChild = this.el.nativeElement.firstChild.lastChild;
    console.log(lastChild.localName);

    if(firstChild.localName === 'img' || firstChild.localName === 'div') {
      firstChild.classList.add('w3-round-top');
    }

    if(firstChild.localName === 'ngw3-card-header' || firstChild.localName === 'ngw3-card-body') {
      firstChild.firstChild.classList.add('w3-round-top');
    }
    // Checking last element of the card to round it
    if(lastChild.localName === 'img' || lastChild.localName === 'div') {
      firstChild.classList.add('w3-round-bottom');
    }

    if(lastChild.localName === 'ngw3-card-footer' || lastChild.localName === 'ngw3-card-body') {
      lastChild.firstChild.classList.add('w3-round-bottom');
    }
  }

}
