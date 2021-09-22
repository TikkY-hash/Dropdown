import React, {FC, useCallback} from 'react';
import styles from './choose-list.module.css'
import {IDropMenuPropsType} from "../../types/drop-menu-props-type";
import ChooseListItem from "../choose-list-item";

const ChooseList : FC<IDropMenuPropsType> = React.memo(({languageList,onDeleteLanguage}) => {
    return (
        <ul className={styles.choose__list_style}>
            {languageList.map(value => {
                const {id} = value

                return (
                   <li key={id}>
                       <ChooseListItem
                           languageList={value}
                           onDeleteLanguage = {() => onDeleteLanguage(id)}
                       />
                   </li>
                )
            })}
        </ul>
    );
});

export default ChooseList;