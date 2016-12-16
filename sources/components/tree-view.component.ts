import { Component, Input/*, Output, EventEmitter*/ } from '@angular/core';

import { ItemsSelect } from '../models/items-select';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html',
    host: {
        '(keydown)': 'keyDown($event)',
        '(keyup)': 'keyUp()'
    }
})

export class TreeViewComponent {
    @Input() items: Array<ItemsSelect>;
    lastItem: ItemsSelect;
    shiftKey: boolean;

    keyDown(event: KeyboardEvent) {
        this.shiftKey = event.shiftKey;
    }

    keyUp() {
        this.shiftKey = false;
    }

    clickEvent(item: ItemsSelect) {
        if (this.shiftKey) {
            this.handleWithShiftCheckbox(item);
        }

        this.lastItem = item;
    }

    handleWithShiftCheckbox(item: ItemsSelect) {
        if (this.lastItem === undefined) {
            return;
        }
        else {
            this.checkListItem(item);
        }        
    }

    checkListItem(currentItem: ItemsSelect) {
        var start = 0;
        var end = 0;
        var lastIndex = 0;
        var currentIndex = 0;
        for (var i = 0; i < this.items.length && (lastIndex === 0 || currentIndex === 0); i++) {            
            if (this.items[i].id === this.lastItem.id) {
                lastIndex = i;
            }
            if (this.items[i].id === currentItem.id) {
                currentIndex = i;
            }            
        }

        start = Math.min(lastIndex, currentIndex);
        end = Math.max(lastIndex, currentIndex);
        for (var i = start; i <= end; i++) {
            this.items[i].checked = currentItem.checked;
        }
    }
}