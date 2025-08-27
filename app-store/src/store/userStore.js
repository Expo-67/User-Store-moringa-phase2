import { create } from "zustand";

// User store to manage user data, loading state, and error handling
export const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  // Fetch users from API and handle loading and error states
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://fakestoreapi.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      set({ users: data, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false, error: error.message });
    }
  },
  // Fetch a single user by ID and return user data or null on failure
  fetchUserById: async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);
      if (!response.ok) throw new Error("Failed to fetch user");
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },
}));
