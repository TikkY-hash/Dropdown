import React, {FC, useCallback} from 'react';
import styles from './drop.module.css'
import {useState} from "react";
import DropdownSearch from "../dropdown-search";
import {IPropsType} from "../../types/active-props-type";
import {IDropdownMenuItemType} from "../../types/dropdown-menu-item-type";
import DropMenuList from "../drop-menu-list";

const languageList : IDropdownMenuItemType[] = [
    {id : 1,icon : './images/Ru.png',language : 'Русский'},
    {id : 2,icon : './images/En.png',language : 'Английский'},
    {id : 3,icon : './images/spain.png',language : 'Испанский'},
    {id : 4,icon : './images/germany.png',language : 'Немецкий'},
    {id : 5,icon : './images/italy.png',language : 'Итальянский'},
    {id : 6,icon : './images/poland.png',language : 'Польский'}
]

const DropMenu : FC<IPropsType> = (
    {
        active,
        onAddLanguage,
        onDeleteLanguage,
        chooseLanguageList
    }) => {
    const [term,onUpdateTerm] = useState('')

    let className = `${styles.wrapper}`
    if(active) {
        className += ` ${styles.active}`
    }

    const onCheckTerm = () : IDropdownMenuItemType[]  => {
        if(!term) {
            return languageList
        }

        return languageList.filter(value => {
            if(value.language.toLocaleLowerCase().indexOf(term) > -1) {
                return value
            }
        })
    }

    const onUpdateTermData = useCallback((term : string) : void => {
        onUpdateTerm(term.toLocaleLowerCase())
    },[])

    return (
        <div className={className}>
            <DropdownSearch onUpdateTerm={onUpdateTermData}/>
            <DropMenuList
                languageList={onCheckTerm()}
                onAddLanguage={(language) => onAddLanguage!(language)}
                onDeleteLanguage={(id) => onDeleteLanguage!(id)}
                chooseLanguage={chooseLanguageList!}
            />
        </div>
    );
};

export default DropMenu;