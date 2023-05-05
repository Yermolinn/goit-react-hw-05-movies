import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
padding: 0 20px;
margin-top: 20px;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 1500ms;
  &.loaded {
    opacity: 1;
  }
`;

export const Item = styled.li`
  list-style: none;
  max-width: 250px;
  text-align: center;
`;

export const MovieLink = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: 500;
  &:hover,
  &:focus {
    color: tomato;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
`;

const ProgressbarStyle = styled(CircularProgressbar)``;

export const Progressbar = ({ value, text }) => {
  return (
    <ProgressbarStyle
      value={value}
      text={text}
      background
      backgroundPadding={6}
      styles={buildStyles({
        textColor: 'black',
        trailColor: 'crimson',
        pathColor: 'limegreen',
        backgroundColor: 'aliceblue',
        textSize: '28px',
      })}
    ></ProgressbarStyle>
  );
};