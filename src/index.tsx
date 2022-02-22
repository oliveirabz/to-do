import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SecondScreen } from './screens/tasksScreen';
import 'react-calendar/dist/Calendar.css';
import 'moment/locale/pt-br';

ReactDOM.render(
  <React.StrictMode>
    <SecondScreen />
  </React.StrictMode>,
  document.getElementById('root')
);
