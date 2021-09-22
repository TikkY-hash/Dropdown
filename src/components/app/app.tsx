import React, {FC} from 'react';
import  styles from './app.module.css'
import Header from "../header";
import DropdownSection from "../dropdown-section";
import DropMenu from "../drop-menu";
import {useState} from "react";
import {IDropdownMenuItemType} from "../../types/dropdown-menu-item-type";

const App : FC = () => {
    const [activeDropDown,onUpdateActive] = useState(false)
    const [chooseList,onUpdateChooseList] = useState<IDropdownMenuItemType[]>([])

    const onAddChooseList = (item : IDropdownMenuItemType) => {
        onUpdateChooseList([...chooseList,item])
    }

    const onUpdateCheck = () : void => {
        onUpdateActive(!activeDropDown)
    }

    const onDeleteListItem = (id : number) => {
        onUpdateChooseList(
            [...chooseList.filter(value => value.id !== id)]
        )
    }
    
    return (
        <div className={styles.container}>
            <Header/>
            <DropdownSection
                onUpdateMenu={onUpdateCheck}
                active={activeDropDown}
                chooseLanguageList={chooseList}
                onDeleteLanguage={onDeleteListItem}
            />
            <DropMenu
                active={activeDropDown}
                onAddLanguage={(language) => onAddChooseList(language)}
                onDeleteLanguage={(id) => onDeleteListItem(id)}
                chooseLanguageList={chooseList}
            />
        </div>
    );
};

export default App;