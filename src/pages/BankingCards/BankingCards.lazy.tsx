import React, { lazy, Suspense } from 'react';

const LazyBankingCards = lazy(() => import('./BankingCards'));

const BankingCards = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBankingCards {...props} />
  </Suspense>
);

export default BankingCards;
