import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Colors } from './d-colors';
import { Shapes } from './d-shapes';

@Directive({
  selector: '[ngw3-button]'
})
export class Ngw3ButtonDirective implements OnInit {
  private isValidColor: boolean = false;
  private button:any;
  private baseColor!:string;

  @Input()
  color: string | undefined;

  @Input()
  round: string = "normal";

  @Input()
  bordered: boolean = true;

  @Input()
  reised: boolean = false;

  constructor(private elem: ElementRef) {
    this.button = this.elem.nativeElement;
  }

  ngOnInit() {
    // Getting the base color as it was created
    this.baseColor = window.getComputedStyle(this.button).backgroundColor;

    if(this.reised) {
      this.button.classList.add('w3-btn');
    } else {
      this.button.classList.add('w3-button');
    }
    // Getting the round shape for the button
    if(this.round !== "square") {
      const round: keyof typeof Shapes = this.round;
      if(Shapes[round]) {
        this.button.classList.add(Shapes[round]);
      } else {
        this.button.classList.add('w3-round');
      }
    } 
    // When color property is valid then it should be found inside the Colors dictionary
    // and so to get the base color for being applied to the button.
    if (this.color) {
      const color: keyof typeof Colors = this.color;
      if (Colors[color]) {
        // A simple temporally span is created in order to apply the class defined inside the
        // Colors dictionary and then from it to extract the color used by the classs.
        // When the base color is extracted, the span element is deleted.
        const span = document.createElement("span");
        span.classList.add(Colors[color]);
        this.button.appendChild(span);
        const cssObj = window.getComputedStyle(span, null);
        this.baseColor = cssObj.getPropertyValue("background-color");
        this.button.style.color = this.baseColor;
        this.isValidColor = true;
        span.remove();
      }
    }
    if(this.bordered) {
      this.button.classList.add('w3-border');
    }
  }

  // simply listener event function used when the button is hovered.
  // This is used to simulate the "class:hover" effect.
  @HostListener('mouseover')
  onHover() {
    let hoverColor = "rgb(230, 230, 230)";

    if (this.isValidColor) {
      const arrayColor = this.baseColor.split(')');
      arrayColor[1] = "0.1" + ")";
      hoverColor = arrayColor.join(', ');
      this.button.style.setProperty("color", this.baseColor, "important");
    }
    this.button.style.setProperty("background-color", hoverColor, "important");
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.button.style.setProperty("background-color", "");
  }
}
