import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

const Text = styled.p``;

export default Notification;
