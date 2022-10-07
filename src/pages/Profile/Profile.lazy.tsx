import React, { lazy, Suspense } from 'react';

const LazyProfile = lazy(() => import('./Profile'));

const Profile = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProfile {...props} />
  </Suspense>
);

export default Profile;
