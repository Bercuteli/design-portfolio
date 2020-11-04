import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  img {
    height: calc(100vh - 200px);
    width: auto;
    max-width: calc(100vw - 400px);
    object-fit: contain;
    object-position: center;
  }
  
  &.portrait {
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
`;
