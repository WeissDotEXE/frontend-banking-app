import React, { FC } from 'react';
import styles from './BankingCards.module.scss';

interface BankingCardsProps {}

const BankingCards: FC<BankingCardsProps> = () => (
  <div className={styles.BankingCards} data-testid="BankingCards">
    BankingCards Component
  </div>
);

export default BankingCards;
