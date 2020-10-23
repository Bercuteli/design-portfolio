import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  
  .item {
    padding: 8px 16px 10px 16px;
    font-weight: bold;
    position: relative;
    display: inline-block;
    
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 4px;
      background: var(--color-bg-accent);
      transition: width 250ms;
    }
    
    &.active {
      &:after {
        left: 0;
        right: auto;
        width: 100%;
      }
    }  
  }
`;
