import React from 'react';
import PropTypes from 'prop-types';
import './Result.css';

//  stateless functional component that gets passed results as props and renders it
const Result = ({ src, alt, title }) =>
  (
    <div className="resultContainer">
      <img src={src} alt={alt} width="20px" height="20px" />
      <p>{title}</p>
    </div>
  );

Result.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Result;
