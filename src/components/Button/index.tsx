'use client';
import styles from './index.module.css';

const Button = () => {
  return (
    <>
      <button
        onClick={() => {
          console.log('!');
        }}
        className={styles.button}
      >
        버튼
      </button>
    </>
  );
};

export default Button;
