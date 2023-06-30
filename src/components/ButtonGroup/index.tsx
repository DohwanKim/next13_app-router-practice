import { ReactNode } from 'react';
import Button from '@/components/Button';
import styles from './index.module.css';

interface IButtonGroup {
  children?: ReactNode;
  className?: string;
  classBind?: string;
  dimension?: 'col' | 'row';
}

function ButtonGroup({
  children,
  classBind = '',
  className,
  dimension = 'row',
}: IButtonGroup) {
  const classDimension = dimension === 'col' ? styles.col : styles.row;

  return (
    <div
      className={`${styles.btn_group} ${className} ${classDimension} ${classBind}`}
    >
      {children}
    </div>
  );
}

export default ButtonGroup;

ButtonGroup.Button = Button;
