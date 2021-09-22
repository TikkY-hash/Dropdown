import {IDropdownMenuItemType} from "./dropdown-menu-item-type";

export interface IDropListItemType {
    languageList : IDropdownMenuItemType,
    onAddLanguage? : () => void,
    onDeleteLanguage : () => void,
    check? : boolean
}