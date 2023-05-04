import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
  <p>react-hooks-event-handling-lab</p>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root')
);
