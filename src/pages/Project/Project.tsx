import React from 'react';

import { ViewTabs } from '../../containers/ViewTabs';
import { Preview } from '../../containers/Preview';
import { Wrapper } from './Project.style';

const Project = () => {

  return (
    <Wrapper>
      <ViewTabs />
      <Preview />
    </Wrapper>
  );
};

export default Project;
export { Project };
