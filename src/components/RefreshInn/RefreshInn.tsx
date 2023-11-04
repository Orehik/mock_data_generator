import React from 'react';
import "./RefreshInn.css"

interface IProps {
  onClick: () => void,
}

export const RefreshInn = ({onClick}: IProps) => {
  return (
    <img src="../../../images/icon.svg" onClick={onClick} className="icon"/>
  );
};