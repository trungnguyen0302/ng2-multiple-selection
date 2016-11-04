import { Component, Input/*, Output, EventEmitter*/ } from '@angular/core';

import { ItemsSelect } from '../models/items-select';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.component.html'
})

export class TreeViewComponent {
    @Input() items: Array<ItemsSelect>;    
}