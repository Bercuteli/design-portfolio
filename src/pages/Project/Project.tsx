import React, { FC } from 'react';

import { ViewTabs } from '../../containers/ViewTabs';
import { Preview } from '../../containers/Preview';
import { Wrapper } from './Project.style';

const Project: FC = () => {

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
