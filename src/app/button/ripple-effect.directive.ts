import {
   animate,
   AnimationBuilder,
   AnimationMetadata,
   AnimationPlayer,
   style,
} from '@angular/animations';
import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
   selector: '[rippleEffect]',
})
export class RippleEffectDirective implements OnInit {
   private player!: AnimationPlayer;
   private button: any;
   private baseColor!: string;

   constructor(private elem: ElementRef, private builder: AnimationBuilder) {
      this.button = this.elem.nativeElement;
   }

   ngOnInit() {
      this.button.style.position = 'relative';
   }

   @HostListener('click', ['$event'])
   onClick(e: any) {
      // Getting the base color as it was created
      this.baseColor = window.getComputedStyle(this.button).color;
      if (this.player) {
         this.player.destroy();
      }

      const circle = document.createElement('span');
      const diameter = Math.max(
         this.button.clientWidth,
         this.button.clientHeight
      );
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - (this.button.offsetLeft + radius)}px`;
      circle.style.top = `${e.clientY - ((this.button.offsetTop-window.scrollY) + radius)}px`;
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      // Calculating the background effect color:
      const arrayColor = this.baseColor.split(')');
      arrayColor[1] = '0.4' + ')';
      circle.style.backgroundColor = arrayColor.join(', ');
      circle.classList.add('ripple');

      const ripple = this.button.getElementsByClassName('ripple')[0];
      if (ripple) {
         ripple.remove();
      }

      const factory = this.builder.build(this.onRipple());
      this.player = factory.create(circle);
      this.button.appendChild(circle);
      this.player.play();
   }
   /*
  Perform wave animation
  */
   private onRipple(): AnimationMetadata[] {
      return [
         style({ transform: 'scale(0)', opacity: 1 }),
         animate('500ms linear', style({ transform: 'scale(5)', opacity: 0 })),
      ];
   }
}
