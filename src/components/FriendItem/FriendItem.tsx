import React, { FC } from 'react';
import styles from './FriendItem.module.scss';

interface FriendItemProps {}

const FriendItem: FC<FriendItemProps> = () => (
  <div className={styles.FriendItem} data-testid="FriendItem">
    FriendItem Component
  </div>
);

export default FriendItem;
