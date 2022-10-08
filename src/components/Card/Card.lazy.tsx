import React, { lazy, Suspense } from "react";

const LazyCard = lazy(() => import("./Card"));

const Card = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyCard {...props}>hello</LazyCard>
    </Suspense>
);

export default Card;
