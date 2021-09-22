import React, {ChangeEvent, FC} from 'react';
import styles from './drop-menu-list-item.module.css'
import {IDropListItemType} from "../../types/drop-list-item-type";
import shape from './Shape.png'

const DropMenuListItem : FC<IDropListItemType> = (
    {
        languageList,
        onAddLanguage,
        onDeleteLanguage,
        check
    }
) => {
    const {language,icon} = languageList

    const onChangeChecked = (e : ChangeEvent<HTMLInputElement>) => {
       if(e.target.checked) {
           onAddLanguage!()
       }else {
           onDeleteLanguage()
       }
    }

    return (
        <div className={styles.list__position}>
            <div className={styles.language__information}>
                <div>
                    <img src={process.env.PUBLIC_URL + `${icon}`} alt="language" width={20} height={14}/>
                </div>
                <h1>{language}</h1>
            </div>
            <label>
                <input
                    type="checkbox"
                    onChange={onChangeChecked}
                    checked={check}
                    className={styles.checkbox}
                />
                <span className={styles.fake} style={{backgroundImage : `url(${shape})`}}></span>
            </label>
            </div>
    );
};

export default DropMenuListItem;