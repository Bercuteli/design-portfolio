import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  padding: 0 24px 0 0;
    
  h3 {
    font-weight: bold;
    font-size: 1.2rem;
  }
    
  .list {
    max-height: calc(100vh - 60px);
    max-width: 224px;
    overflow-y: auto;
    padding-right: 8px;
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
  
  &.portrait {
    padding: 24px 8px 8px 8px;
    
    .list {
      max-height: 224px;
      max-width: calc(100vw - 16px);
      overflow-x: auto;
      padding-top: 8px;
    }
    
    .item {
      margin-top: 0;
      margin-right: 16px;
    }
  }
`;
