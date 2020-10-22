import React, { FC, useCallback, MouseEvent } from 'react';
import clsx from 'clsx';

import { ViewTabs as Tabs } from '../../enums/viewTabs';

import { tabs } from './assets';
import { Wrapper } from './ViewTabs.style';

interface Props {
  currentTab: Tabs,
  onChange: (tab: Tabs) => void,
}

const ViewTabs: FC<Props> = ({ currentTab, onChange }) => {

  const onClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.id) {
      onChange(target.id as Tabs);
    }
  }, [onChange]);

  return (
    <Wrapper>
      {tabs.map(tab => {
        const { name, title } = tab;
        const className = clsx('item', {
          active: name === currentTab,
        });

        return (
          <div
            id={name}
            key={name}
            className={className}
            onClick={onClick}
          >
            {title}
          </div>
        )
      })}
    </Wrapper>
  );
};

export default ViewTabs;
export { ViewTabs };
