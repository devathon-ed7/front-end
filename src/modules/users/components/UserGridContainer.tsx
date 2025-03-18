"use client";

import { useEffect, useState } from "react";
import { UserGrid } from "./UserGrid";
import { User } from "../interfaces/user.interface";
import { useUserSearch } from "../context/UserSearchContext";

export function UserGridContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useUserSearch();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Simulate API call
        setTimeout(() => {
          const mockUsers: User[] = [
            // Your mock users data here
            { 
              id: 1, 
              username: "johndoe", 
              password: "********", 
              user_details: {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com",
                description: "Administrator",
                notes: "Main system admin",
                profile_filename: "https://github.com/shadcn.png",
                user_account_id: 1,
                role_id: 1
              }
            },
            // Additional mock users...
          ];
          
          setUsers(mockUsers);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter(user => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      user.username.toLowerCase().includes(query) ||
      user.user_details?.name?.toLowerCase().includes(query) ||
      user.user_details?.email?.toLowerCase().includes(query) ||
      user.user_details?.description?.toLowerCase().includes(query)
    );
  });

  return (
    <UserGrid 
      users={filteredUsers}
      loading={loading}
    />
  );
}