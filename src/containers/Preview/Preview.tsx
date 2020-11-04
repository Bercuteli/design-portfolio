import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ImageSet, Project } from '../../interfaces/project.interface';
import { PreviewTypes } from '../../enums/previewTypes';
import { projects } from '../../projects/projects';

import { useWrapperClass } from '../../hooks/useWrapperClass';

import { ImageView } from '../../components/ImageView';
import { NoImage } from '../../components/NoImage';
import { Wrapper } from './Preview.style';

const Preview: FC = () => {
  const wrapperClass = useWrapperClass();
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
  const imageSet = project[selectedPreview as keyof Project];
  const showImage = (selectedPreview === PreviewTypes.sketch || selectedPreview === PreviewTypes.design);

  const showImageView = (showImage && imageSet);
  const showNoImageView = (showImage && !imageSet);

  return (
    <Wrapper className={wrapperClass}>
      {showImageView && (
        <ImageView imageSet={imageSet as ImageSet} />
      )}
      {showNoImageView && (
        <NoImage />
      )}
    </Wrapper>
  );
};

export default Preview;
export { Preview };
