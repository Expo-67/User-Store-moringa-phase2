import { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import UserCard from "./UserCard";

// Component to display list of users
const UserList = () => {
  const { users, loading, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* map through and display user */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
