import ReactDom from 'react-dom';
import React from 'react';

// IMPORT 'main.scss' FROM SASS (ENTRY POINT)
import './sass/main.scss';

// COMPONENTS
import App from './components/App/App';

ReactDom.render(<App />, document.getElementById('root'));
