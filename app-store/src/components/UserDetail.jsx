import { useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useEffect, useState } from "react";

// Component to display user details based on ID from URL
const UserDetail = () => {
  const { id } = useParams();
  const { users, fetchUserById } = useUserStore();
  const [user, setUser] = useState(null);

  //   Fetch user from local store or API based on ID
  useEffect(() => {
    const localUser = users.find((u) => u.id === parseInt(id));
    if (localUser) setUser(localUser);
    else fetchUserById(id).then(setUser);
  }, [id]);

  if (!user) return <p>User not found</p>;

  return (
    <div>
      {/* display user details */}
      <h2>{user.username}</h2>
      <p>{user.email}</p>
      <p>
        {user.name.firstname} {user.name.lastname}
      </p>
    </div>
  );
};

export default UserDetail;
