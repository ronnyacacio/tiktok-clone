import React from 'react';
import { StatusBar } from 'expo-status-bar';

import App from './src';

export default function Main() {
  return (
    <>
      <App />
      <StatusBar style="auto" />
    </>
  );
}
