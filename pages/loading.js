import React, { Fragment } from 'react'
import styled from 'styled-components';
import { Label } from 'glamorous';

const StyledSpinner = styled.svg`

  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  margin-left:45vw;
  
  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Lable = styled.h3`
    margin-left: 44vw;
    margin-top: 30vh;
    padding-bottom: 15px;
`;


const Loading = ({ text }) => (
    <Fragment>
        <Lable>{text}</Lable>
        <StyledSpinner viewBox="0 0 50 50">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
            />
        </StyledSpinner>
    </Fragment>
);

export default Loading;
