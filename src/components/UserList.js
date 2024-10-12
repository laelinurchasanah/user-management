import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const users = [
    { id: 1, name: "Laeli Nurchasanah" },
    { id: 2, name: "Minatozaki Sana" },
  ];
  const location = useLocation();
  useEffect(() => {
    console.log("URL changed:", location.pathname);
  }, [location]);

  const handleCommentClick = (user)=>{
    navigate('/comment', {state: {userName: user.name}});
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button className="button-list" onClick={() => handleCommentClick(user)}>Comment on {user.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
