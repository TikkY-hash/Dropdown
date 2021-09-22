import {IDropdownMenuItemType} from "./dropdown-menu-item-type";

export interface IDropMenuPropsType {
    languageList : IDropdownMenuItemType[],
    onAddLanguage? : (language : IDropdownMenuItemType) => void,
    onDeleteLanguage : (id : number) => void
    chooseLanguage? : IDropdownMenuItemType[]
}