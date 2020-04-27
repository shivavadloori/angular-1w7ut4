import {Directive,ElementRef,Renderer2, Input } from '@angular/core'; 

@Directive({selector : '[myHidden]'})
export class HiddenDirective{
  constructor(public el : ElementRef,public rend: Renderer2){
    
  }
  
  @Input() myHidden: boolean;

  ngOnInit(){
    if(this.myHidden){
        this.rend.setStyle(this.el.nativeElement,'display','none');
    }
  }
  
}