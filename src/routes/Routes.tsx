import React, { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { RoutesUI } from '../enums/routes';

const About = lazy(() => import('../pages/About'));
const Project = lazy(() => import('../pages/Project'));
const Page404 = lazy(() => import('../pages/Page404'));

const Routes: FC = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path={RoutesUI.home}>
            <About />
          </Route>
          <Route exact path={RoutesUI.about}>
            <About />
          </Route>
          <Route exact path={RoutesUI.project}>
            <Project />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
export { Routes };
