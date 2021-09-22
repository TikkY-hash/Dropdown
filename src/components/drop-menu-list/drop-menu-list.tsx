import React, {FC} from 'react';
import styles from './drop-menu-list.module.css'
import {IDropMenuPropsType} from "../../types/drop-menu-props-type";
import DropMenuListItem from "../drop-menu-list-item";

const DropMenuList : FC<IDropMenuPropsType> = (
    {
        languageList,
        onAddLanguage,
        onDeleteLanguage,
        chooseLanguage
    }
) => {
    return (
        <div className={styles.list__wrapper}>
            <ul className={styles.language__list}>
                {languageList.map(value => {
                    const {id} = value

                    const check = chooseLanguage?.find(value => value.id === id)

                    return (
                        <li key={id}>
                            <DropMenuListItem
                                languageList={value}
                                onAddLanguage={() => onAddLanguage!(value)}
                                onDeleteLanguage = {() => onDeleteLanguage(id)}
                                check = {!!check}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default DropMenuList;