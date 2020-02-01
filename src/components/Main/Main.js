import React from 'react';

// COMPONENTS
import Gallery from '../Gallery/Gallery';
import Overview from '../Overview/Overview';
import Detail from '../Detail/Detail';
import Cta from '../Cta/Cta';

const Main = () => (
  <main className="hotel-view">
    <Gallery />
    <Overview />
    <Detail />
    <Cta />
  </main>
);

export { Main as default };
