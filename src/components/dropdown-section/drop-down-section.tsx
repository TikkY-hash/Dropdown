import React, {FC} from 'react';
import styles from './dropdown.module.css'
import {IPropsType} from "../../types/active-props-type";
import ChooseList from "../choose-list";

const DropdownSection : FC<IPropsType> = (
    {
        onUpdateMenu,
        active,chooseLanguageList,
        onDeleteLanguage
    }) => {
    const path = active ?
        "M1.45442 4.81225C1.06285 5.11842 0.497225 5.0492 0.19105 4.65763C-0.115124 4.26607 -0.0459015 3.70044 0.345663 3.39427L4.4423 0.190996C4.76791 -0.0636034 5.22507 -0.0636926 5.55078 0.190779L9.65074 3.39405C10.0424 3.70007 10.1119 4.26567 9.80585 4.65735C9.49983 5.04904 8.93423 5.11848 8.54255 4.81246L4.99691 2.04228L1.45442 4.81225Z" :
        "M1.45442 0.191051C1.06285 -0.115123 0.497225 -0.0459012 0.19105 0.345663C-0.115124 0.737227 -0.0459015 1.30286 0.345663 1.60903L4.4423 4.8123C4.76791 5.0669 5.22507 5.06699 5.55078 4.81252L9.65074 1.60925C10.0424 1.30323 10.1119 0.737626 9.80585 0.345942C9.49983 -0.0457427 8.93423 -0.115187 8.54255 0.190833L4.99691 2.96101L1.45442 0.191051Z"

    const result = !chooseLanguageList!.length ?
        <h4 className={styles.drop__choose}>Выберите язык из списка</h4> :
        <ChooseList languageList={chooseLanguageList!} onDeleteLanguage={(id) => onDeleteLanguage!(id)}/>

    return (
        <div className={styles.wrapper} style={{height : `${!chooseLanguageList!.length ?  `40px` : 'auto'}`}}>
            {result}
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.drop__svg}
                onClick={() => onUpdateMenu!()}
            >
                <path d={path} fill="#333333"/>
            </svg>
        </div>
    );
};

export default DropdownSection;
