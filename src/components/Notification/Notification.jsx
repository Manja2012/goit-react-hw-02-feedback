import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Notification/notification.module.css'


const Notification = ({ message}) => {
  return (
    <div className={style.title}>
        {message}
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};