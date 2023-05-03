import styled from 'styled-components';

export const MovieSearchForm = styled.form`
  width: 400px;
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  /* gap: 10px; */
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: whitesmoke;
`;

export const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: lightgray;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: lightgreen;
  }
`;
