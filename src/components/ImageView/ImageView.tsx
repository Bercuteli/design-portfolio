import React, { FC } from 'react';

import { ImageSet } from '../../interfaces/project.interface';
import { MediaQueries } from '../../enums/mediaQueries';
import { ImageSizes } from '../../enums/imageSizes';

import { useWrapperClass } from '../../hooks/useWrapperClass';
import { Wrapper } from './ImageView.style';

interface Props {
  imageSet: ImageSet;
}

const sizes = [
  { media: MediaQueries.desktop, size: ImageSizes.origin },
  { media: MediaQueries.laptop, size: ImageSizes.origin },
  { media: MediaQueries.tabletLandscape, size: ImageSizes.middle },
  { media: MediaQueries.tabletPortrait, size: ImageSizes.middle },
  { media: MediaQueries.mobileLandscape, size: ImageSizes.small },
  { media: MediaQueries.mobilePortrait, size: ImageSizes.small },
]

const ImageView: FC<Props> = ({ imageSet }) => {
  const wrapperClass = useWrapperClass();

  const sources = sizes.map(item => {
    const { media, size } = item;
    const srcSet = imageSet[size];

    return (
      <source
        key={media}
        srcSet={srcSet}
        media={media}
      />
    );
  });

  const originName = imageSet[ImageSizes.origin];

  return (
    <Wrapper className={wrapperClass}>
      <picture>
        {sources}
        <img src={originName} alt="Preview" />
      </picture>
    </Wrapper>
  );
};

export default ImageView;
export { ImageView };
