import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => {
      return (
        <li key={option}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </li>
      );
    })}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

const Button = styled.button`
  margin-right: 20px;
`;

const List = styled.ul`
  display: flex;
`;

export default FeedbackOptions;
