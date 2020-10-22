import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  padding: 16px 24px;
  
  .item {
    padding: 8px;
    .name {
      font-weight: 500;
    }
    
    &.active {
      background-color: aqua;
    }
  }
`;
