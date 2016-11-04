import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[widthMultipleSelect]' })

export class SetWidthDirective implements OnInit {
    @Input('widthMultipleSelect') width: string;

    constructor(private el: ElementRef, private renderer: Renderer) {        
    }

    ngOnInit() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', this.width);
    }
}