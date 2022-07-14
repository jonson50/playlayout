import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Colors } from './colors';

@Directive({
  selector: '[ngw3-button]'
})
export class Ngw3ButtonDirective implements OnInit {
  private basisBackground!: string;
  private isValidColor: boolean = false;

  @Input()
  color: string | undefined;

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    this.elem.nativeElement.classList.add('w3-button');
    this.elem.nativeElement.classList.add('w3-round');

    if (this.color) {
      const color: keyof typeof Colors = this.color;
      if (Colors[color]) {
        this.isValidColor = true;
        this.elem.nativeElement.classList.add(Colors[color]);
      }
    }
    this.basisBackground = window.getComputedStyle(this.elem.nativeElement).backgroundColor;
  }

  @HostListener('mouseover')
  onHover() {
    const button = this.elem.nativeElement;
    let hoverColor = 'rgb(230, 230, 230)';

    if (this.isValidColor) {
      let [r, g, b] = this.basisBackground.split('(')[1].split(')')[0].split(',');
      const factor = 0.90; // 10% Shade
      let hexHoverColor = this.convertRGBtoHex(parseInt(r) * factor, parseInt(g) * factor, parseInt(b) * factor);
      hoverColor = `#${hexHoverColor}`;
    }
    button.style.setProperty("background-color", hoverColor, "important");
  }

  @HostListener('mouseleave')
  onMouseleave() {
    const button = this.elem.nativeElement;
    button.style.setProperty("background-color", this.basisBackground, "important");
  }

  //Getting Hex value from rgb Value
  colorToHex(color: number) {
    let hexadecimal = Math.round(color).toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  //Converting a RGB Color to a Hex Color
  convertRGBtoHex(red: number, green: number, blue: number) {
    return this.colorToHex(red) + this.colorToHex(green) + this.colorToHex(blue);
  }
}
