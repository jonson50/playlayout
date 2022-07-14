import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[cColor]',
})
export class CColorDirective implements OnInit {

  @Input()
  cColor: string | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.firstChild.classList.add(this.cColor);
  }

}
