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
    shiftKey: boolean;

    keyDown(event: KeyboardEvent) {
        this.shiftKey = event.shiftKey;
    }

    keyUp() {
        this.shiftKey = false;
    }

    clickEvent(item: ItemsSelect) {
        if (this.shiftKey && item.checked) {
            this.checkListItem(item);
        }
    }

    checkListItem(currentItem: ItemsSelect) {
        var previousItem: ItemsSelect;        
        var end = 0;
        while (end < this.items.length && this.items[end].id !== currentItem.id) {
            if (this.items[end].checked) {
                previousItem = this.items[end]
            }

            end++;
        }

        var start = 0;
        if (previousItem !== undefined) {
            while (start < this.items.length && this.items[start].id !== previousItem.id) {
                start++;
            }
        }        

        for (start; start < end; start++) {
            this.items[start].checked = true;
        }
    }
}