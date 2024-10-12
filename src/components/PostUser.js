import React from 'react';

const PostUser = () => {
  return (
    <div>
      <h1>Post User</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter user name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostUser;
