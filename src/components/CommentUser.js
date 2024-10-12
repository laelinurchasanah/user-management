import React from 'react';
import { useLocation } from 'react-router-dom';

const CommentUser = () => {
    const location = useLocation();
    const {userName} = location.state || {};

  return (
    <div>
      <h1>User Comments</h1>
      <p>Commenting on user: {userName}</p>
      <form>
        <label>Comment:</label>
        <textarea placeholder="Write your comment"></textarea>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentUser;
