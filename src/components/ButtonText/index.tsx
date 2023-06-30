import React from 'react';
import styles from './index.module.css';

interface IButtonTime {
  text: string;
  classBind?: string;
  onClick?: () => void;
}

function ButtonText({ text, onClick, classBind }: IButtonTime) {
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`${styles.button_time} ${classBind}`}
      onClick={clickHandler}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          clickHandler();
        }
      }}
    >
      {text}
    </button>
  );
}

export default ButtonText;
