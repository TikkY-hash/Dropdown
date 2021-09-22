import React, {ChangeEvent, FC} from 'react';
import styles from './dropdown-search.module.css'
import {ISearchType} from "../../types/search-type";
import icon from './search.png'

const DropdownSearch : FC<ISearchType> = React.memo(({onUpdateTerm}) => {
    const onUpdateFilterData = (e : ChangeEvent<HTMLInputElement>) : void => {
        onUpdateTerm(e.target.value)
    }

    return (
        <div className={styles.wrapper__menu}>
            <input
                placeholder="Поиск"
                onChange={onUpdateFilterData}
                style={
                    {backgroundImage : `url(${icon})`}
                }
            />
        </div>
    );
});

export default DropdownSearch;