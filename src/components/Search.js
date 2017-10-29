import React from 'react';
import PropTypes from 'prop-types';

//  stateless functional component containing input which lifts state up to parent
const Search = ({ onChange }) => (
  <input type="text" name="search" onChange={onChange} placeholder="Search" />
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
