import React, { FC } from 'react';
import styles from './FriendsCard.module.scss';

interface FriendsCardProps {}

const FriendsCard: FC<FriendsCardProps> = () => (
  <div className={styles.FriendsCard} data-testid="FriendsCard">
    FriendsCard Component
  </div>
);

export default FriendsCard;
