// React
import ReactDOM from 'react-dom';

// React Calendar
import 'react-calendar/dist/Calendar.css';

// moment
import 'moment/locale/pt-br';

// Screens
import { FirstScreen } from './screens/firstScreen';
import { SecondScreen } from './screens/tasksScreen';

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles (global)
import './global.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/register' component={FirstScreen} />
      <Route path='/tasks' component={SecondScreen} />
      <Route path='/' component={FirstScreen} />
    </Switch>
  </Router>,
  document.getElementById('root')
);