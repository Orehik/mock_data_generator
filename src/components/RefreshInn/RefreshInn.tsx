import React from 'react';
import "./RefreshInn.css"

interface IProps {
  onClick: () => void,
}

export const RefreshInn = ({onClick}: IProps) => {
  return (
    <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" focusable="false" viewBox="0 0 12 12" onClick={onClick}>
        <path fill="none" stroke="currentColor" stroke-linecap="round" d="M10 4c-.8-1.1-2-2.5-4.1-2.5-2.5 0-4.4 2-4.4 4.5s2 4.5 4.4 4.5c1.3 0 2.5-.6 3.3-1.5m1.3-7.5V4c0 .3-.2.5-.5.5H7.5"/>
      </svg>
    </div>
  );
};