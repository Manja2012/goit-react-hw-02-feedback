import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/FeedbackOptions/feedbackOptions.module.css' 

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
    <div className={style.container}>
      {options.map(option => (
        <button
          className={style.button}
          key={option}
          value={option}
          type="button"
          onClick={option => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
      
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
    