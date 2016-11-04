import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[heightMultipleSelect]' })

export class SetHeightDirective implements OnInit {
    @Input('heightMultipleSelect') height: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }

    ngOnInit() {
        this.renderer.setElementStyle(this.el.nativeElement, 'max-height', this.height);
    }
}