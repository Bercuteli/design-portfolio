import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Project } from '../../interfaces/project.interface';
import { ViewTabs } from '../../enums/viewTabs';
import { projects } from '../../assets/projects';

import { ImageView } from '../../components/ImageView';
import { Wrapper } from './Preview.style';

interface Props {
  currentTab: ViewTabs,
};

const Preview: FC<Props> = ({ currentTab }) => {
  const { projectName } = useParams();

  const project = projects.find(p => {
    return p.id === projectName;
  });

  if (!project) {
    return null;
  }

  const view = project[currentTab as keyof Project];
  if (!view) {
    return null;
  }

  const showImage = (currentTab === ViewTabs.sketch || currentTab === ViewTabs.design);

  return (
    <Wrapper>
      {showImage && (
        <ImageView src={view as string} />
      )}
    </Wrapper>
  );
};

export default Preview;
export { Preview };
