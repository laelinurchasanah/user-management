import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Breadcrumb = () => {
  const { user_id, post_id } = useParams();

  return (
    <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/users">User List</NavLink></li>
          {user_id && <li><NavLink to={`/user/${user_id}`}>User {user_id}</NavLink></li>}
          {post_id && <li><NavLink to={`/user/${user_id}/edit-post/${post_id}`}>Edit Post {post_id}</NavLink></li>}
        </ul>
      </nav>
  );
};

export default Breadcrumb;
