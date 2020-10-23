import React, { FC } from 'react';
import { Wrapper } from './ImageView.style';

interface Props {
  src: string;
}

const ImageView: FC<Props> = ({ src }) => {

  return (
    <Wrapper>
      <img src={src} alt="Preview" />
    </Wrapper>
  );
};

export default ImageView;
export { ImageView };
