import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';

export const Postlist = ({ list }) => (
  <>
    {list.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </>
);

Postlist.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
