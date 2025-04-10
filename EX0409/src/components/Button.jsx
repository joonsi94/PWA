import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <>
            <div className={styles.title}>TITLE</div>
        <div className={styles.button}>Button</div>
        </>
    );
}

export default Button;