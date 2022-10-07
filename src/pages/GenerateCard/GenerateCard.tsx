import React, { FC } from 'react';
import styles from './GenerateCard.module.scss';

interface GenerateCardProps {}

const GenerateCard: FC<GenerateCardProps> = () => (
  <div className={styles.GenerateCard} data-testid="GenerateCard">
    GenerateCard Component
  </div>
);

export default GenerateCard;
