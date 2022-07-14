import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rippleEffect]',
})
export class RippleEffectDirective implements OnInit {

  private player!: AnimationPlayer;
  private firstBackground!: string;

  constructor(private renderer: Renderer2, private elem: ElementRef, private builder: AnimationBuilder) { }

  /* @HostListener('mouseover')
  onHover() {
    const button = this.elem.nativeElement;
    this.firstBackground = window.getComputedStyle(button).backgroundColor;
    let newBackground = this.firstBackground.replace(')',', 0.7)');
    console.log(newBackground)
    button.style.setProperty("background-color", newBackground, "important");
  }


  @HostListener('mouseleave') onMouseleave() {
    const button = this.elem.nativeElement;
    button.style.setProperty("background-color", this.firstBackground, "important");
  } */


  @HostListener('click', ['$event'])
  onClick(e: any) {
    if (this.player) { this.player.destroy(); }

    const button = this.elem.nativeElement;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = `rgba(255, 255, 255, 0.4)`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    const factory = this.builder.build(this.onRipple());
    this.player = factory.create(circle);
    button.appendChild(circle);
    this.player.play();
  }

  ngOnInit() {
    const currentElem = this.elem.nativeElement;
    currentElem.style.position = "relative";
  }

  /*
  Perform wave animation
  */
  private onRipple(): AnimationMetadata[] {
    return [
      style({ transform: 'scale(0)',  opacity: 1 }),
      animate('500ms linear', style({ transform: 'scale(5)', opacity: 0 })),
    ];
  }
}
