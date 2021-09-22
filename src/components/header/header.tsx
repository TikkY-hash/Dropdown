import React, {FC} from 'react';
import styles from './header.module.css'

const Header : FC = React.memo(() => {
    return (
        <div>
            <h1 className={styles.header__tittle}>Язык</h1>
        </div>
    );
});

export default Header;