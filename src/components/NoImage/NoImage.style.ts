import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  
  .container {
     display: block;
    
    .image {
      text-align: center;
       
      img {
        width: 240px;
        opacity: 0.5;
      }
    }
    
    .message {
      padding: 32px;
      text-align: center;
      font-size: 1.5rem;
      color: var(--color-text-secondary);
    }
  }
`;
