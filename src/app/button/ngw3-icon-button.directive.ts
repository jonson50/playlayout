import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Colors } from './d-colors';

@Directive({
  selector: '[ngw3-icon-button]'
})
export class Ngw3IconButtonDirective implements OnInit {
  private isValidColor: boolean = false;
  private button:any;
  private baseColor!:string;

  @Input()
  color: string | undefined;

  @Input()
  bordered: boolean = true;

  @Input()
  reised: boolean = false;

  constructor(private elem: ElementRef) {
    this.button = this.elem.nativeElement;
    // Getting the base color as it was created
    this.baseColor = window.getComputedStyle(this.button).backgroundColor;
  }

  ngOnInit() {
    this.button.classList.add('w3-circle');
    this.button.classList.add('w3-xlarge');
    this.button.classList.add('w3-icon-button');
    const rad = (this.button.clientHeight >= this.button.clientWidth) ? this.button.clientHeight : this.button.clientWidth;
    this.button.style.backgroundColor = 'inherit';
    this.button.style.width = `${rad}px`;
    this.button.style.height = `${rad}px`;

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
    }
    this.button.style.setProperty("background-color", hoverColor, "important");
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.button.style.setProperty("background-color", "");
  }

}
