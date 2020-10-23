import React, { FC } from 'react';

import Image from '../../images/image-gallery.svg';
import { Wrapper } from './NoImage.style';

interface Props {
  message?: string;
}

const defaultMessage = 'There is no image but we are working hard to add it';

const NoImage: FC<Props> = ({ message = defaultMessage}) => {

  return (
    <Wrapper>
      <div className="container">
        <div className="image">
          <img src={Image} alt={message} />
        </div>
        <div className="message">{message}</div>
      </div>
    </Wrapper>
  );
};

export default NoImage;
export { NoImage };
