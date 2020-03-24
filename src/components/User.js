/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address: { city } }) => (
  <div className="user">
    <p>author: {name}</p>
    <p>e-mail: {email}</p>
    <p>address: {city}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
