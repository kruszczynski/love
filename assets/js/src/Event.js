import React from 'react';

import Icon from './Icon';

const Event = ({ iconSrc, header, text, date }) => {
  return (
    <>
      <Icon src={ iconSrc } />
      <h2>{ header }</h2>
      <p>{ text }</p>
      <p>{ date }</p>
    </>
  );
};

export default Event;
