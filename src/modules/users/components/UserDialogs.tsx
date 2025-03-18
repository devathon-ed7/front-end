"use client";

import { useUserDialog } from "../context/UserDialogContext";
import { ViewUserDialog } from "./ViewUserDialog";
import { EditUserDialog } from "./EditUserDialog";
import { CreateUserDialog } from "./CreateUserDialog";
import { DeleteUserDialog } from "./DeleteUserDialog";

export function UserDialogs() {
  const {
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
    handleInputChange,
    handleEditUser,
    handleConfirmDelete,
    handleCreateUser
  } = useUserDialog();
  
  return (
    <>
      {/* View User Dialog */}
      <ViewUserDialog 
        open={viewUserDialogOpen} 
        onOpenChange={setViewUserDialogOpen}
        user={selectedUser}
        onEdit={handleEditUser}
      />
      
      {/* Edit User Dialog */}
      <EditUserDialog
        open={editUserDialogOpen}
        onOpenChange={setEditUserDialogOpen}
        form={userForm}
        onFormChange={handleInputChange}
      />
      
      {/* Create User Dialog */}
      <CreateUserDialog
        open={createUserDialogOpen}
        onOpenChange={setCreateUserDialogOpen}
        form={userForm}
        onFormChange={handleInputChange}
      />
      
      {/* Delete User Dialog */}
      <DeleteUserDialog
        open={deleteUserDialogOpen}
        onOpenChange={setDeleteUserDialogOpen}
        user={selectedUser}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}