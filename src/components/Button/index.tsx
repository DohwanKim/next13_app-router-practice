'use client';
import styles from './index.module.css';

const buttonTypeList = ['primary', 'secondary'] as const;
const buttonSizeList = ['large', 'medium', 'small'] as const;

type buttonType = (typeof buttonTypeList)[number];
type buttonSize = (typeof buttonSizeList)[number];

interface IProps {
  children?: string;
  type?: buttonType;
  size?: buttonSize;
  disabled?: boolean;
  onClick?(): void;
  classBind?: string;
}

const Button = ({
  children,
  classBind = '',
  disabled = false,
  onClick,
  size = 'medium',
  type = 'primary',
}: IProps) => {
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };
  const btnSizeClass =
    size === 'large'
      ? styles.large
      : size === 'small'
      ? styles.small
      : styles.medium;
  const btnTypeClass = type === 'primary' ? styles.primary : styles.secondary;

  return (
    <button
      type={'button'}
      className={`${styles.button} ${btnTypeClass} ${btnSizeClass} ${classBind}`}
      disabled={disabled}
      onClick={clickHandler}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          clickHandler();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
