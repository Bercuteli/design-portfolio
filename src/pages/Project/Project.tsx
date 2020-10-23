import React, { useState, useCallback } from 'react';

import { ViewTabs as Tabs} from '../../enums/viewTabs';
import { ViewTabs } from '../../containers/ViewTabs';
import { Preview } from '../../containers/Preview';
import { Wrapper } from './Project.style';

const Project = () => {
  const [currentTab, setCurrentTab] = useState(Tabs.design);

  const onChangeTab = useCallback((tab: Tabs) => {
    setCurrentTab(tab);
  }, [setCurrentTab]);

  return (
    <Wrapper>
      <ViewTabs
        currentTab={currentTab}
        onChange={onChangeTab}
      />
      <Preview
        currentTab={currentTab}
      />
    </Wrapper>
  );
};

export default Project;
export { Project };
