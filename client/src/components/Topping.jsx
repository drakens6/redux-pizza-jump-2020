import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Topping = ({ label }) => {
  const [hovered, setHovered] = useState(false);

  const onMouseEnterHandler = () => {
    setHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      style={{
        backgroundColor: hovered ? '#000fff' : 'none',
      }}
    >
      <p>Name: {label}</p>
    </div>
  );
};

Topping.propTypes = {};

export default Topping;
