import React from 'react';

import { ViewTabs } from '../../containers/ViewTabs';
import { Preview } from '../../containers/Preview';
import { Wrapper } from './Project.style';

const Project = () => {

  return (
    <Wrapper>
      <ViewTabs />
      <div className="content">
        <Preview />
      </div>
    </Wrapper>
  );
};

export default Project;
export { Project };
