import React from 'react';

// COMPONENTS
import Gallery from '../Gallery/Gallery';
import Overview from '../Overview/Overview';

const Main = () => (
  <main className="hotel-view">
    <Gallery />
    <Overview />
  </main>
);

export { Main as default };
