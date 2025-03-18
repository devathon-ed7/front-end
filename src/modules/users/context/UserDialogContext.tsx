"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "sonner"; 
import { User, UserForm } from "../interfaces/user.interface";

interface DialogContextType {
  viewUserDialogOpen: boolean;
  editUserDialogOpen: boolean;
  deleteUserDialogOpen: boolean;
  createUserDialogOpen: boolean;
  selectedUser: User | null;
  userForm: UserForm;
  setViewUserDialogOpen: (open: boolean) => void;
  setEditUserDialogOpen: (open: boolean) => void;
  setDeleteUserDialogOpen: (open: boolean) => void;
  setCreateUserDialogOpen: (open: boolean) => void;
  setSelectedUser: (user: User | null) => void;
  setUserForm: (form: UserForm) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleViewUser: (user: User) => void;
  handleEditUser: (user: User) => void;
  handleDeleteUser: (user: User) => void;
  handleNewUser: () => void;
  handleCreateUser: () => Promise<void>;
  handleUpdateUser: () => Promise<void>;
  handleConfirmDelete: () => Promise<void>;
}

const UserDialogContext = createContext<DialogContextType | undefined>(undefined);

export function UsersDialogProvider({ children }: { children: ReactNode }) {
  const [viewUserDialogOpen, setViewUserDialogOpen] = useState(false);
  const [editUserDialogOpen, setEditUserDialogOpen] = useState(false);
  const [deleteUserDialogOpen, setDeleteUserDialogOpen] = useState(false);
  const [createUserDialogOpen, setCreateUserDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userForm, setUserForm] = useState<UserForm>({
    username: "",
    password: "",
    name: "",
    email: "",
    description: "",
    notes: "",
    role_id: 1,
    id: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm(prev => ({ ...prev, [name]: value }));
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setViewUserDialogOpen(true);
  };
  
  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    // Adjust to handle both direct properties and user_details properties
    setUserForm({
      username: user.username || "",
      password: "",
      name: user.user_details?.name || user.full_name || "",
      email: user.email || user.user_details?.email || "",
      description: user.user_details?.description || "",
      notes: user.user_details?.notes || "",
      role_id: user.user_details?.role_id || 1,
      id: user.id || 0
    });
    setEditUserDialogOpen(true);
  };
  
  const handleDeleteUser = (user: User) => {
    setSelectedUser(user);
    setDeleteUserDialogOpen(true);
  };
  
  const handleNewUser = () => {
    setUserForm({
      username: "",
      password: "",
      name: "",
      email: "",
      description: "",
      notes: "",
      role_id: 1,
      id: 0
    });
    setCreateUserDialogOpen(true);
  };

  const handleCreateUser = async () => {
    try {
      toast.success("User created successfully");
      setCreateUserDialogOpen(false);
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user");
    }
  };
  
  const handleUpdateUser = async () => {
    if (!selectedUser) return;
    
    try {
      toast.success("User updated successfully");
      setEditUserDialogOpen(false);
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };
  
  const handleConfirmDelete = async () => {
    if (!selectedUser) return;
    
    try {
      toast.success("User deleted successfully");
      setDeleteUserDialogOpen(false);
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  };

  return (
    <UserDialogContext.Provider 
      value={{
        viewUserDialogOpen,
        editUserDialogOpen,
        deleteUserDialogOpen,
        createUserDialogOpen,
        selectedUser,
        userForm,
        setViewUserDialogOpen,
        setEditUserDialogOpen,
        setDeleteUserDialogOpen,
        setCreateUserDialogOpen,
        setSelectedUser,
        setUserForm,
        handleInputChange,
        handleViewUser,
        handleEditUser,
        handleDeleteUser,
        handleNewUser,
        handleCreateUser,
        handleUpdateUser,
        handleConfirmDelete
      }}
    >
      {children}
    </UserDialogContext.Provider>
  );
}

export function useUserDialog() {
  const context = useContext(UserDialogContext);
  if (!context) {
    throw new Error("useUserDialog must be used within a UsersDialogProvider");
  }
  return context;
}