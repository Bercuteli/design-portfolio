import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  .item {
    margin-right: 24px;
    cursor: pointer;
    
    &.active {
      font-weight: 500;
      border-bottom: 2px solid blue;
    }
  }
`;
