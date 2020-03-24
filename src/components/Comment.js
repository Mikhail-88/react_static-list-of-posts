/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <>
    <h4 className="caption">{name}</h4>
    <p>{body}</p>
    <p className="email">Commented by: {email}</p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
