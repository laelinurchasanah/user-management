import React from 'react';
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { user_id, post_id } = useParams();

  return (
    <div>
      <h1>Edit Post</h1>
      <p>Editing post with Post ID: {post_id} for User ID: {user_id}</p>
      <form>
        <label>Title:</label>
        <input type="text" placeholder="Enter post title" />
        <label>Content:</label>
        <textarea placeholder="Enter post content"></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
