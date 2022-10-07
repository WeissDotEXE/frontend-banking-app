import React, { lazy, Suspense } from 'react';

const LazyGenerateCard = lazy(() => import('./GenerateCard'));

const GenerateCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGenerateCard {...props} />
  </Suspense>
);

export default GenerateCard;
