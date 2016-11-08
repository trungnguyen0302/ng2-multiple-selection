import { Component, ViewContainerRef, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { TreeViewComponent } from './tree-view.component';

import { DefaultSetting } from '../models/default-setting';
import { ItemsSelect } from '../models/items-select';
import { MultipleSelect } from '../models/multiple-select';

@Component({
    selector: 'multiple-select',
    templateUrl: './multiple-select.component.html',
    styleUrls: ['./multiple-select.component.css'],
    viewProviders: [TreeViewComponent]
})

export class MultipleSelectComponent implements OnInit {
    @Input() multipleSelect: MultipleSelect;
	@Output() loseFocus = new EventEmitter();

    dropdownToggle: boolean;
    isCheckAll: boolean;
    expanded: boolean;
    element: Element;
    items: ItemsSelect[];

    constructor(viewContainerRef: ViewContainerRef) {
        this.element = viewContainerRef.element.nativeElement;
    }

    ngOnInit() {
        this.expanded = true;
        this.getSelectedTitle();
        this.clickBody();
    }

    getSelectedTitle() {
        this.multipleSelect.selectionTitle = this.multipleSelect.getItemsDisplay();
		this.isCheckAll = this.multipleSelect.selectionTitle === this.multipleSelect.allItemsCheckedText;
    }

    clickBody() {
        let body = document.querySelector('body');
        body.addEventListener('click', e => {
            if (!this.dropdownToggle || !e.target) { return; };
            if (this.element !== e.target && !this.element.contains((<any>e.target))) {
                this.dropdownToggle = false;
				this.loseFocus.emit(this.multipleSelect.getValueItems());
            }
        }, false);
    }

    changeItems() {
        var rootItems = this.multipleSelect.items;
        var count = 0;
        var countChecked = 0;
        rootItems.forEach(item => {
            item.checkFromChilds();
            count += item.countChilds;
            countChecked += item.countChildsChecked();
        })

        this.isCheckAll = count === countChecked;
        this.multipleSelect.selectionTitle = this.multipleSelect.getItemsDisplay();
    }

    toggle() {
        this.expanded = !this.expanded;
        this.multipleSelect.items.forEach(item => {
            item.expanded = this.expanded;
            if (this.expanded) {
                item.expandedAllItems();
            }
        })
    }
}