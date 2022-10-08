import React, { FC } from 'react';
import styles from './TransactionItem.module.scss';

interface TransactionItemProps {}

const TransactionItem: FC<TransactionItemProps> = () => (
  <div className={styles.TransactionItem} data-testid="TransactionItem">
    TransactionItem Component
  </div>
);

export default TransactionItem;
