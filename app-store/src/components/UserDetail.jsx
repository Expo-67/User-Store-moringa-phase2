import { useParams } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useEffect, useState } from "react";

// Component to display user details based on ID from URL
const UserDetail = () => {
  const { id } = useParams();
  const { users, fetchUserById } = useUserStore();
  const [user, setUser] = useState(null);
  //
  const [loading, setLoading] = useState(true);

  // Fetch user details either from local store or API
  useEffect(() => {
    const localUser = users.find((u) => u.id === parseInt(id));
    if (localUser) {
      setUser(localUser);
      setLoading(false);
    } else {
      fetchUserById(id).then((data) => {
        setUser(data);
        setLoading(false);
      });
    }
  }, [id, users, fetchUserById]);

  if (loading) return <p>Loading user...</p>;
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
