'use client';

import { Provider as ReduxProvider } from 'react-redux';

import React, { FC, PropsWithChildren } from 'react';

import store from '../store';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);
export default Providers;
