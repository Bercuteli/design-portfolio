import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  flex-grow: 1;
  
  .content {
    max-height: calc(100vh - 100px);
    max-width: calc(100vw - 300px);
    overflow-y: auto;
  }
  
  &.portrait {
    .content {
      max-width: calc(100vw - 32px);
      max-height: available;
    }
  }
`;
