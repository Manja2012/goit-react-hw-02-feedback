import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/SectionTitle/sectionTitle.module.css';


const Section = ({ title, children }) => {
  return (
    <div>
        <h1 className={style.title}>{title}</h1>
        {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};