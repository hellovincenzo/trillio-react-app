import React from 'react';

// COMPONENTS
import Gallery from '../Gallery/Gallery';
import Overview from '../Overview/Overview';
import Detail from '../Detail/Detail';
import UserReview from '../UserReview/UserReview';

const Main = () => (
  <main className="hotel-view">
    <Gallery />
    <Overview />
    <Detail />
  </main>
);

export { Main as default };
