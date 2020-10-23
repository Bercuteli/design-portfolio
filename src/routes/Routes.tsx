import React, { FC, Suspense, lazy } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { config } from '../config';
import { RoutesUI } from '../enums/routes';
import { ProjectsList } from '../containers/ProjectsList';
import { Wrapper } from './Routes.style';

const About = lazy(() => import('../pages/About'));
const Project = lazy(() => import('../pages/Project'));

const Routes: FC = () => {

  // Due to GitHub Pages serves only static files, it can't response with index.html for every request
  // so, we have to use this workaround.
  // See more details in /public/404.html
  const history = useHistory();
  const search = new URLSearchParams(window.location.search);
  const redirectURL = search.get('p');
  if (redirectURL) {
    history.push(redirectURL);
    return null;
  }

  return (
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
  );
};

export default Routes;
export { Routes };
