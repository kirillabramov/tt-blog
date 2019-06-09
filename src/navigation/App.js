import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { AsyncPosts, AsyncPostDetail, Loader } from 'components';

const App = () => (
  <Switch>
    <Suspense fallback={<Loader />}>
      <Route exact path="/" component={AsyncPosts} />
      <Route path="/post/:id" component={AsyncPostDetail} />
    </Suspense>
  </Switch>
);

export default App;
