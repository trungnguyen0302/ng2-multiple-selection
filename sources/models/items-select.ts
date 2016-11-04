export class ItemsSelect {
    id: number;
    value: any;
    text: string;
    checked: boolean;
    expanded: boolean;
    enable: boolean;
    items: ItemsSelect[];
    countChilds: number;

    constructor(
        id: number,
        value: any,
        text: string,
        checked: boolean,
        expanded: boolean,
        enable: boolean,
        items: ItemsSelect[]) {
        this.id = id;
        this.value = value;
        this.text = text;
        this.checked = checked;
        this.expanded = expanded;
        this.enable = enable;
        this.items = items;
        this.countChilds = 0;
        this.countChilds = this.getCountChilds();
    }

    expandedAllItems() {
        this.expanded = true;
        this.items.forEach(item => {
            item.expandedAllItems();
        })
    }

    getCountChilds() {
        if (this.items.length === 0) {
            this.countChilds = 1;
        }

        this.items.forEach(item => {
            this.countChilds += item.countChilds;
        })

        return this.countChilds;
    }

    checkChilds() {
        this.items.forEach(item => {
            item.checked = item.enable ? this.checked : item.checked;
            item.checkChilds();
        });
    }

    checkFromChilds() {
        this.checked = this.allChildIsChecked();
        this.items.forEach(item => {
            item.checkFromChilds();
        })
    }

    allChildIsChecked() {
        return this.countChilds === this.countChildsChecked();
    }

    countChildsChecked() {
        var count = 0;
        if (this.items.length === 0) {
            count = this.checked ? 1 : 0;
        }
        this.items.forEach(item => {
            count += item.countChildsChecked();
        })

        return count;
    }

    getValueChildsChecked() {
        var values = '';
        if (this.items.length === 0) {
            values = this.checked ? this.value : '';
        }

        this.items.forEach(item => {
            var value = item.getValueChildsChecked();
            if (value !== '') {
                values = values === '' ? value : values + ',' + value;
            }
        })

        return values;
    }

    getTextChildsChecked() {
        var text = '';
        if (this.items.length === 0) {
            text = this.checked ? this.text : '';
        }

        this.items.forEach(item => {
            var textItem = item.getTextChildsChecked();
            if (textItem !== '') {
                text = text === '' ? textItem : text + ',' + textItem;
            }
        })

        return text;
    }
}