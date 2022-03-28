import ReactDOM from 'react-dom';
import './index.css';
import { SecondScreen } from './screens/tasksScreen';
import 'react-calendar/dist/Calendar.css';
import 'moment/locale/pt-br';
import { FirstScreen } from './screens/firstScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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