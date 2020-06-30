import React from 'react';

export const HomeRouter = {
  path: '/',
  component: React.lazy(() => import('../views/Home')),
};
