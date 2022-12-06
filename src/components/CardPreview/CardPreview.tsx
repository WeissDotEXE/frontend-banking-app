import React, { FC } from 'react';
import styles from './CardPreview.module.scss';

interface CardPreviewProps {}

const CardPreview: FC<CardPreviewProps> = () => (
  <div className={styles.CardPreview} data-testid="CardPreview">
    CardPreview Component
  </div>
);

export default CardPreview;
