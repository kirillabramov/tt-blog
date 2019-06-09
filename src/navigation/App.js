import React from 'react';
import { Route } from 'react-router-dom';

import { Posts, PostDetail } from 'components';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Posts} />
      <Route path="/post/:id" component={PostDetail} />
    </div>
  );
};

export default App;