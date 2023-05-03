import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  gap: 40px;
  transition: opacity 1500ms;
  &.listLoaded {
    opacity: 1;
  }
`;


export const ReviewCard = styled.li`
  border-bottom: solid 1px gray;
`