import React, {FC} from 'react';
import {IDropListItemType} from "../../types/drop-list-item-type";
import close from './icon_right.png'
import styles from './choose-list-item.module.css'

const ChooseListItem : FC<IDropListItemType> = ({languageList,onDeleteLanguage}) => {
    return (
        <div className={styles.choose__item_style}>
            <h1>{languageList.language}</h1>
            <img
                src = {close} width={12} height={12}
                onClick={() => onDeleteLanguage()}
                alt = "close"
            />
        </div>
    );
};

export default ChooseListItem;