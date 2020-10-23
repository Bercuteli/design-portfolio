import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 32px 128px 32px;
  min-height: calc(100vh - 260px);
  border: 16px solid var(--color-border-monitor);
  border-radius: .5em;
  position: relative;
  
  &:before {
    content:"";
    display:block;
    position:absolute;
    background: var(--color-border-stand);
    width: 150px;
    height: 48px;
    top: calc(100% + 16px);
  }
  &:after {
     content:"";
     display:block;
     position:absolute;
     background:var(--color-border-monitor);
     border-top-left-radius:.5em;
     border-top-right-radius:.5em;
     width: 300px;
     height: 16px;
     top: calc(100% + 48px);
  }
`;
