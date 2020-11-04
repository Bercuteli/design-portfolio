import React, { FC } from 'react';

import { useWrapperClass } from '../../hooks/useWrapperClass';

import { ViewTabs } from '../../containers/ViewTabs';
import { Preview } from '../../containers/Preview';
import { Wrapper } from './Project.style';

const Project: FC = () => {
  const wrapperClass = useWrapperClass();

  return (
    <Wrapper className={wrapperClass}>
      <ViewTabs />
      <div className="content">
        <Preview />
      </div>
    </Wrapper>
  );
};

export default Project;
export { Project };
