import {IDropdownMenuItemType} from "./dropdown-menu-item-type";

export interface IPropsType {
    onUpdateMenu? : () => void,
    active : boolean,
    onAddLanguage? : (language : IDropdownMenuItemType) => void,
    onDeleteLanguage? : (id : number) => void,
    chooseLanguageList? : IDropdownMenuItemType[]
}