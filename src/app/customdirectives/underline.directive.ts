import {Directive,HostListener, Renderer2, ElementRef} from '@angular/core';

@Directive({
    selector : '[myUnderline]'
})

export class UnderLineDirective{

  constructor(
    private el : ElementRef,
    private renderer : Renderer2
  ){}
  @HostListener('mouseenter')onMouseEnter() {
        this.hover(true);
}
@HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }
    hover(shouldUnderline: boolean){
        if(shouldUnderline){
        // Mouse enter   
        this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
        } else {
    // Mouse leave           
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}


