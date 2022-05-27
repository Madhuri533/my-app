import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoatDir]'
})
export class HoatDirDirective {
  @HostBinding('style.backgroundColor') sColor: any;

  constructor() { }
  @HostListener('click') onClk(){
    this.sColor='blue';
  }
  @HostListener('mouseenter') onmouseOver(){
    this.sColor='red';
  }
  @HostListener('mouseleave') onLeave(){
    this.sColor='green';
  }

}
