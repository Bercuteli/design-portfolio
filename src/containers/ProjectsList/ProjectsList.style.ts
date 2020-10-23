import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  padding: 16px 24px;
  
  h3 {
    font-weight: bold;
    font-size: 1.2rem;
    padding-top: 8px;
  }
    
  .item {
    padding: 8px;
    margin-top: 16px;
    border-radius: 8px;
    background-color: var(--color-bg-secondary);
    
    .name {
      font-weight: bold;
      padding: 12px 0 8px 0;
    }
    
    .description {
      padding: 4px 0 8px 0;
      color: var(--color-text-secondary);
    }
    
    &.active {
      background-color: var(--color-bg-accent);
      box-shadow: var(--shadow-light);
    }
    
    img {
      width: 200px;
      height: 124px;
      border-radius: 4px;
    }
  }
`;
