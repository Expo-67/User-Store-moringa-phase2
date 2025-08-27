import React from "react";

// destructuring user prop
const UserCard = ({ user }) => {
  return (
    <div className="card">
      {/* displaying user details */}
      <h3>{user.username}</h3>
      <p>{user.email}</p>
      <p>
        {user.name.firstname} {user.name.lastname}
      </p>
    </div>
  );
};

export default UserCard;
