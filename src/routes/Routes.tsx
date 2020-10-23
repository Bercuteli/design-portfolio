import React, { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { RoutesUI } from '../enums/routes';
import { ProjectsList } from '../containers/ProjectsList';
import { Wrapper } from './Routes.style';

const About = lazy(() => import('../pages/About'));
const Project = lazy(() => import('../pages/Project'));

const Routes: FC = () => {

  return (
    <BrowserRouter>
      <Wrapper>
        <ProjectsList />

        <Suspense fallback={<div />}>
          <Switch>
            <Route exact path={RoutesUI.project}>
              <Project />
            </Route>
            <Route path="*">
              <About />
            </Route>
          </Switch>
        </Suspense>

      </Wrapper>
    </BrowserRouter>
  );
};

export default Routes;
export { Routes };
