import React, { FC } from 'react';
import clsx from 'clsx';
import { useParams, NavLink } from 'react-router-dom';

import { tabs } from './assets';
import { Wrapper } from './ViewTabs.style';
import { PreviewTypes } from '../../enums/previewTypes';
import { RoutesUI } from '../../enums/routes';

const ViewTabs: FC = () => {
  const {
    projectName,
    previewType = PreviewTypes.design,
  } = useParams();

  const currentTab: PreviewTypes = previewType as PreviewTypes;

  return (
    <Wrapper>
      {tabs.map(tab => {
        const { name, title } = tab;
        const url = `${RoutesUI.projectPath}/${projectName}/${name}`;
        const className = clsx('item', {
          active: name === currentTab,
        });

        return (
          <NavLink to={url} key={name} className={className}>
            {title}
          </NavLink>
        )
      })}
    </Wrapper>
  );
};

export default ViewTabs;
export { ViewTabs };
