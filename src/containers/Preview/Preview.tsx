import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Project } from '../../interfaces/project.interface';
import { PreviewTypes } from '../../enums/previewTypes';
import { projects } from '../../projects/projects';

import { ImageView } from '../../components/ImageView';
import { NoImage } from '../../components/NoImage';
import { Wrapper } from './Preview.style';

const Preview: FC = () => {
  const {
    projectName,
    previewType = PreviewTypes.design,
  } = useParams();

  const project = projects.find(p => {
    return p.id === projectName;
  });

  if (!project) {
    return null;
  }

  const selectedPreview: PreviewTypes = previewType as PreviewTypes;
  const view = project[selectedPreview as keyof Project];
  const showImage = (selectedPreview === PreviewTypes.sketch || selectedPreview === PreviewTypes.design);

  const showImageView = (showImage && view);
  const showNoImageView = (showImage && !view);

  return (
    <Wrapper>
      {showImageView && (
        <ImageView src={view as string} />
      )}
      {showNoImageView && (
        <NoImage />
      )}
    </Wrapper>
  );
};

export default Preview;
export { Preview };
