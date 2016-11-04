import { ItemsSelect } from "./items-select";
import { DefaultSetting } from './default-setting';

export class MultipleSelect {
    selectionTitle: string;
    maxHeight: string = DefaultSetting.MAX_HEIGHT;
    maxWidth: string = DefaultSetting.MAX_WIDTH;
    checkAllCheckBoxText: string = DefaultSetting.CHECK_ALL_CHECK_BOX_TEXT;
    noItemText: string = DefaultSetting.NONE_ITEM_CHECKED_TEXT;
    allItemsCheckedText: string = DefaultSetting.ALL_ITEMS_CHECKED_TEXT;
    noneItemCheckedText: string = DefaultSetting.NONE_ITEM_CHECKED_TEXT;
    subfixNumberItemsCheckedText: string = DefaultSetting.SUBFIX_NUMBER_ITEMS_CHECKED_TEXT;
    numberItemsDisplay: number = DefaultSetting.NUMBER_ITEMS_DISPLAY;
    noData: string = DefaultSetting.NO_ITEM_TEXT;
    characterValue: string = DefaultSetting.CHARACTER_VALUE;
    characterText: string = DefaultSetting.CHARACTER_TEXT;
    showHeader: boolean = DefaultSetting.SHOW_HEADER;
    items: ItemsSelect[];

    getValueItems() {
        var value = '';
        this.items.forEach(item => {
            var valueItem = item.getValueChildsChecked();
            if (valueItem !== '') {
                value = value === '' ?
                    valueItem : value + ',' + valueItem;
            }
        })

        return value.toString().replace(/,/g, this.characterValue);
    }

    getItemsDisplay() {
        var maxNumberItems = this.numberItemsDisplay !== undefined ?
            this.numberItemsDisplay : this.numberItemsDisplay;
        var text = '';
        var countChecked = 0;
        var count = 0;

        this.items.forEach(item => {
            countChecked += item.countChildsChecked();
            count += item.countChilds;
            var textItems = item.getTextChildsChecked()
            if (textItems !== '') {
                text = text === '' ?
                    textItems : text + ',' + textItems;
            }
        })
        text = text.replace(/,/g, this.characterText);
        var textDisplay =
            count === countChecked ? this.allItemsCheckedText :
                countChecked === 0 ? this.noneItemCheckedText :
                    countChecked > maxNumberItems ? countChecked + this.subfixNumberItemsCheckedText :
                        text;

        return textDisplay;
    }

    checkAllItems(isChecked: boolean) {
        this.items.forEach(item => {
            item.checked = isChecked;
            item.checkChilds();
        })
        this.selectionTitle = this.getItemsDisplay();
    }
}