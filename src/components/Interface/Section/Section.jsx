import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

const Title = styled.h3``;

export default Section;
