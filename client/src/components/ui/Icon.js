import React from 'react';

export default function Icon(props) {
  return (
    <svg width="50px" height="50px">
      <use xlinkHref={`svg/sprite.svg#${props.iconName}`} />
    </svg>
  );
}

// <use xlinkHref={`svg/sprite.svg#${props.iconName}`} />;
