import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { user_id } = useParams();

  return (
    <div>
      <h1>User Detail</h1>
      <p>Showing details for user ID: {user_id}</p>
    </div>
  );
};

export default UserDetail;
