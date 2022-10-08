import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {}

const Button: FC<ButtonProps> = () => (
  <div className={styles.Button} data-testid="Button">
    Button Component
  </div>
);

export default Button;
