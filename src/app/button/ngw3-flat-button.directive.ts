import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Colors } from './d-colors';
import { Shapes } from './d-shapes';

@Directive({
  selector: '[ngw3-flat-button]'
})
export class Ngw3FlatButtonDirective implements OnInit {
  private isValidColor: boolean = false;
  private button: any;
  private baseColor!: string;
  private textColor!: string;

  @Input()
  color: string | undefined;

  @Input()
  round: string = "normal";

  @Input()
  reised: boolean = false;

  constructor(private elem: ElementRef) { this.button = this.elem.nativeElement; }

  ngOnInit() {
    if (this.reised) {
      this.button.classList.add('w3-btn');
    } else {
      this.button.classList.add('w3-button');
    }
    // Getting the round shape for the button
    if (this.round !== "square") {
      const round: keyof typeof Shapes = this.round;
      if (Shapes[round]) {
        this.button.classList.add(Shapes[round]);
      } else {
        this.button.classList.add('w3-round');
      }
    }

    if (this.color) {
      const color: keyof typeof Colors = this.color;
      if (Colors[color]) {
        this.isValidColor = true;
        this.button.classList.add(Colors[color]);
      }
    }
    this.baseColor = window.getComputedStyle(this.button).backgroundColor;
    this.textColor = window.getComputedStyle(this.button).color;
  }

  @HostListener('mouseover')
  onHover() {
    let hoverColor = 'rgb(230, 230, 230)';

    if (this.isValidColor) {
      let [r, g, b] = this.baseColor.split('(')[1].split(')')[0].split(',');
      const factor = 0.90; // 10% Shade
      let hexHoverColor = this.convertRGBtoHex(parseInt(r) * factor, parseInt(g) * factor, parseInt(b) * factor);
      hoverColor = `#${hexHoverColor}`;
      this.button.style.setProperty("color", this.textColor, "important");
    }
    this.button.style.setProperty("background-color", hoverColor, "important");
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.button.style.setProperty("background-color", this.baseColor, "important");
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
