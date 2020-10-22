import React, { FC } from 'react';

interface Props {
  src: string;
}

const ImageView: FC<Props> = ({ src }) => {

  return (
    <img src={src} alt="Preview" />
  );
};

export default ImageView;
export { ImageView };
