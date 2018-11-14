import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NoMatch from './components/NoMatch/NoMatch';

class App extends Component {
  render () {
    return (
      <div className="App">
        <nav>
            <ul style={{listStyle: 'none'}}>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users" component={ Users } />
            <Route path="/courses" component={ Courses } />
            <Redirect from="/all-courses" to="/courses" />
            <Route component={NoMatch}/>
        </Switch>
        <ol style={{textAlign: 'left'}}>
        </ol>
      </div>
    );
  }
}

export default App;
