import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Posts, PostDetail } from 'components';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route path="/post/:id" component={PostDetail} />
    </Switch>
  </>
);

export default App;
