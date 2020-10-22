import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { ViewTabs as Tabs} from '../../enums/viewTabs';
import { ProjectsList } from '../../containers/ProjectsList';
import { ViewTabs } from '../../containers/ViewTabs';
import { Preview } from '../../containers/Preview';
import { Wrapper } from './Project.style';

const Project = () => {
  const params = useParams();
  const [currentTab, setCurrentTab] = useState(Tabs.design);

  const onChangeTab = useCallback((tab: Tabs) => {
    setCurrentTab(tab);
  }, [setCurrentTab]);

  return (
    <Wrapper>
      <ProjectsList />
      <div>
        <ViewTabs
          currentTab={currentTab}
          onChange={onChangeTab}
        />
        <Preview
          currentTab={currentTab}
        />
      </div>
    </Wrapper>
  );
};

export default Project;
export { Project };
