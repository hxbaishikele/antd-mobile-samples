import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TabBarExample from './routes/TabBarExample';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={TabBarExample} />
    </Router>
  );
}

export default RouterConfig;
