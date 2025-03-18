"use client";

import { useState, useEffect } from "react";
import { 
  Eye, Pencil, Trash2, Search, Plus, Users as UsersIcon,
  ChevronLeft, ChevronRight, Filter, Download, MoreHorizontal
} from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/UI/card";
import { Button } from "@/shared/components/UI/button";
import { Input } from "@/shared/components/UI/input";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/shared/components/UI/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/shared/components/UI/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/UI/avatar";
import { Badge } from "@/shared/components/UI/badge";
import { Label } from "@/shared/components/UI/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/UI/tabs";
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuSeparator, DropdownMenuTrigger 
} from "@/shared/components/UI/dropdown-menu";
import { Skeleton } from "@/shared/components/UI/skeleton";

// User type based on your API response
interface UserDetails {
  id: number;
  description: string;
  notes: string;
  email: string;
  name: string;
  user_account_id: number;
  profile_filename: string | null;
  role_id: number;
}

interface User {
  id: number;
  username: string;
  password: string;
  user_details?: UserDetails;
}

interface UserResponse {
  users: User[];
  totalUsers: number;
  totalPages: number;
  currentPage: number;
  sort: {
    sortBy: string;
    order: string;
  };
}

export const UserPage = () => {
  // State for users and pagination
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  // State for modals
  const [viewUserDialogOpen, setViewUserDialogOpen] = useState(false);
  const [editUserDialogOpen, setEditUserDialogOpen] = useState(false);
  const [deleteUserDialogOpen, setDeleteUserDialogOpen] = useState(false);
  const [createUserDialogOpen, setCreateUserDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  // State for new/edit user form
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    description: "",
    notes: "",
    role_id: 1
  });

  // Mock data for initial render - replace with API call
  useEffect(() => {
    // Simulate API loading
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Replace with actual API call:
        // const response = await fetch(`/api/v1/users?page=${currentPage}`);
        // const data: UserResponse = await response.json();
        
        // Mock data for now
        setTimeout(() => {
          const mockUsers: User[] = [
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
            { 
              id: 2, 
              username: "janesmith", 
              password: "********", 
              user_details: {
                id: 2,
                name: "Jane Smith",
                email: "jane.smith@example.com",
                description: "Sales Manager",
                notes: "Handles all sales operations",
                profile_filename: null,
                user_account_id: 2,
                role_id: 2
              }
            },
            { 
              id: 3, 
              username: "robertjohnson", 
              password: "********", 
              user_details: {
                id: 3,
                name: "Robert Johnson",
                email: "robert.johnson@example.com",
                description: "Inventory Manager",
                notes: "Manages product inventory",
                profile_filename: null,
                user_account_id: 3,
                role_id: 2
              }
            },
          ];
          
          setUsers(mockUsers);
          setTotalPages(3);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Error loading users");
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, [currentPage]);

  // Handle user view
  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setViewUserDialogOpen(true);
  };
  
  // Handle user edit
  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setUserForm({
      username: user.username,
      password: "",
      name: user.user_details?.name || "",
      email: user.user_details?.email || "",
      description: user.user_details?.description || "",
      notes: user.user_details?.notes || "",
      role_id: user.user_details?.role_id || 1
    });
    setEditUserDialogOpen(true);
  };
  
  // Handle user delete
  const handleDeleteUser = (user: User) => {
    setSelectedUser(user);
    setDeleteUserDialogOpen(true);
  };
  
  // Handle new user
  const handleNewUser = () => {
    setUserForm({
      username: "",
      password: "",
      name: "",
      email: "",
      description: "",
      notes: "",
      role_id: 1
    });
    setCreateUserDialogOpen(true);
  };
  
  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Submit create user form
  const handleCreateUser = async () => {
    try {
      // API call would go here
      // await fetch('/api/v1/users', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userForm),
      // });
      
      toast.success("User created successfully");
      setCreateUserDialogOpen(false);
      
      // Refresh user list
      // This would be handled by refetching the users list
      const newUser: User = {
        id: Date.now(), // temp ID
        username: userForm.username,
        password: "********",
        user_details: {
          id: Date.now(),
          name: userForm.name,
          email: userForm.email,
          description: userForm.description,
          notes: userForm.notes,
          profile_filename: null,
          user_account_id: Date.now(),
          role_id: userForm.role_id
        }
      };
      
      setUsers(prev => [newUser, ...prev]);
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user");
    }
  };
  
  // Submit edit user form
  const handleUpdateUser = async () => {
    if (!selectedUser) return;
    
    try {
      // API call would go here
      // await fetch(`/api/v1/users/${selectedUser.id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userForm),
      // });
      
      toast.success("User updated successfully");
      setEditUserDialogOpen(false);
      
      // Update the user in the list
      setUsers(prev => prev.map(user => {
        if (user.id === selectedUser.id) {
          return {
            ...user,
            username: userForm.username,
            user_details: {
              ...user.user_details!,
              name: userForm.name,
              email: userForm.email,
              description: userForm.description,
              notes: userForm.notes,
              role_id: userForm.role_id
            }
          };
        }
        return user;
      }));
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };
  
  // Submit delete user
  const handleConfirmDelete = async () => {
    if (!selectedUser) return;
    
    try {
      // API call would go here
      // await fetch(`/api/v1/users/${selectedUser.id}`, {
      //   method: 'DELETE',
      // });
      
      toast.success("User deleted successfully");
      setDeleteUserDialogOpen(false);
      
      // Remove user from list
      setUsers(prev => prev.filter(user => user.id !== selectedUser.id));
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user");
    }
  };

  // Filter users based on search query
  const filteredUsers = users.filter(user => {
    const searchLower = searchQuery.toLowerCase();
    return (
      user.username.toLowerCase().includes(searchLower) ||
      user.user_details?.name?.toLowerCase().includes(searchLower) ||
      user.user_details?.email?.toLowerCase().includes(searchLower) ||
      user.user_details?.description?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="space-y-6 p-1 md:p-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">Manage your system users and their permissions</p>
        </div>
        <Button onClick={handleNewUser} className="gap-2">
          <Plus className="size-4" /> Add User
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>All Users</CardTitle>
              <CardDescription>A list of all users in your system.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative max-w-sm">
                <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-8 w-[200px] md:w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Sort by Name</DropdownMenuItem>
                  <DropdownMenuItem>Sort by Date</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Filter by Role</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="list" className="flex gap-2 items-center">
                <UsersIcon className="h-4 w-4" />
                List View
              </TabsTrigger>
              <TabsTrigger value="grid" className="flex gap-2 items-center">
                <MoreHorizontal className="h-4 w-4" />
                Grid View
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="list">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      Array.from({ length: 5 }).map((_, index) => (
                        <TableRow key={`loading-${index}`}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Skeleton className="h-10 w-10 rounded-full" />
                              <div className="space-y-1">
                                <Skeleton className="h-4 w-[150px]" />
                                <Skeleton className="h-3 w-[100px]" />
                              </div>
                            </div>
                          </TableCell>
                          <TableCell><Skeleton className="h-4 w-[180px]" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                          <TableCell><Skeleton className="h-5 w-[60px]" /></TableCell>
                          <TableCell><Skeleton className="h-8 w-[100px] ml-auto" /></TableCell>
                        </TableRow>
                      ))
                    ) : filteredUsers.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                          No users found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={user.user_details?.profile_filename || undefined} />
                                <AvatarFallback>
                                  {user.user_details?.name?.[0].toUpperCase() || user.username[0].toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.user_details?.name || user.username}</div>
                                <div className="text-xs text-muted-foreground">@{user.username}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{user.user_details?.email || "-"}</TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {user.user_details?.role_id === 1 ? "Admin" : "User"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="success" className="bg-green-500/10 text-green-600 hover:bg-green-500/20 dark:bg-green-500/20 dark:text-green-400">
                              Active
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleViewUser(user)}
                              >
                                <Eye className="h-4 w-4 text-primary" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleEditUser(user)}
                              >
                                <Pencil className="h-4 w-4 text-blue-500" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleDeleteUser(user)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? (
                  Array.from({ length: 6 }).map((_, index) => (
                    <Card key={`card-loading-${index}`} className="overflow-hidden">
                      <CardHeader className="pb-0">
                        <div className="flex justify-between">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <Skeleton className="h-5 w-16" />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4 pb-0">
                        <Skeleton className="h-5 w-[60%] mb-2" />
                        <Skeleton className="h-4 w-[80%] mb-1" />
                        <Skeleton className="h-4 w-[70%]" />
                      </CardContent>
                      <CardFooter className="flex justify-end border-t mt-4 pt-4">
                        <Skeleton className="h-9 w-[120px]" />
                      </CardFooter>
                    </Card>
                  ))
                ) : filteredUsers.length === 0 ? (
                  <div className="col-span-full text-center py-10 text-muted-foreground">
                    No users found.
                  </div>
                ) : (
                  filteredUsers.map((user) => (
                    <Card key={`card-${user.id}`} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.user_details?.profile_filename || undefined} />
                              <AvatarFallback>
                                {user.user_details?.name?.[0].toUpperCase() || user.username[0].toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-base">{user.user_details?.name || user.username}</CardTitle>
                              <CardDescription>@{user.username}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="success" className="bg-green-500/10 text-green-600 hover:bg-green-500/20 dark:bg-green-500/20 dark:text-green-400">
                            Active
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm text-muted-foreground">Email:</span>
                            <p className="text-sm font-medium">{user.user_details?.email || "-"}</p>
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">Role:</span>
                            <p className="text-sm font-medium">
                              {user.user_details?.role_id === 1 ? "Administrator" : "Standard User"}
                            </p>
                          </div>
                          {user.user_details?.description && (
                            <div>
                              <span className="text-sm text-muted-foreground">Description:</span>
                              <p className="text-sm">{user.user_details?.description}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-4">
                        <Badge variant="outline">{user.user_details?.role_id === 1 ? "Admin" : "User"}</Badge>
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleViewUser(user)}
                          >
                            <Eye className="h-4 w-4 text-primary" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleEditUser(user)}
                          >
                            <Pencil className="h-4 w-4 text-blue-500" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteUser(user)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="text-sm text-muted-foreground">
            Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> users
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
                // Show up to 5 pages with current page in the middle when possible
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else {
                  const middle = Math.min(Math.max(currentPage, 3), totalPages - 2);
                  pageNumber = i - 2 + middle;
                }
                
                return (
                  <Button
                    key={`page-${pageNumber}`}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNumber)}
                    className="w-9 px-0"
                  >
                    {pageNumber}
                  </Button>
                );
              })}
            </div>
            <Button 
              variant="outline" 
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* View User Dialog */}
      <Dialog open={viewUserDialogOpen} onOpenChange={setViewUserDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              Detailed information about this user
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedUser.user_details?.profile_filename || undefined} />
                  <AvatarFallback className="text-lg">
                    {selectedUser.user_details?.name?.[0].toUpperCase() || selectedUser.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">{selectedUser.user_details?.name || selectedUser.username}</h3>
                  <p className="text-sm text-muted-foreground">@{selectedUser.username}</p>
                </div>
              </div>
              
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label className="text-xs">User ID</Label>
                    <p className="text-sm font-medium">{selectedUser.id}</p>
                  </div>
                  <div className="col-span-2">
                    <Label className="text-xs">Email</Label>
                    <p className="text-sm font-medium">{selectedUser.user_details?.email || "-"}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-xs">Role</Label>
                  <p className="text-sm font-medium">
                    {selectedUser.user_details?.role_id === 1 ? "Administrator" : "Standard User"}
                  </p>
                </div>
                {selectedUser.user_details?.description && (
                  <div>
                    <Label className="text-xs">Description</Label>
                    <p className="text-sm">{selectedUser.user_details.description}</p>
                  </div>
                )}
                {selectedUser.user_details?.notes && (
                  <div>
                    <Label className="text-xs">Notes</Label>
                    <p className="text-sm">{selectedUser.user_details.notes}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setViewUserDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={() => {
              setViewUserDialogOpen(false);
              selectedUser && handleEditUser(selectedUser);
            }}>
              Edit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={editUserDialogOpen} onOpenChange={setEditUserDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user information
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={userForm.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="password">Password (leave blank to keep unchanged)</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={userForm.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={userForm.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={userForm.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                value={userForm.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Input
                id="notes"
                name="notes"
                value={userForm.notes}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <select 
                id="role" 
                name="role_id" 
                className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none"
                value={userForm.role_id}
                onChange={(e) => setUserForm({...userForm, role_id: parseInt(e.target.value)})}
              >
                <option value={1}>Administrator</option>
                <option value={2}>Standard User</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditUserDialogOpen(false)}>Cancel</Button>
            <Button type="submit" onClick={handleUpdateUser}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Create User Dialog */}
      <Dialog open={createUserDialogOpen} onOpenChange={setCreateUserDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
            <DialogDescription>
              Add a new user to the system
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="create-username">Username</Label>
              <Input
                id="create-username"
                name="username"
                value={userForm.username}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="create-password">Password</Label>
              <Input
                id="create-password"
                name="password"
                type="password"
                value={userForm.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="create-name">Name</Label>
              <Input
                id="create-name"
                name="name"
                value={userForm.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="create-email">Email</Label>
              <Input
                id="create-email"
                name="email"
                type="email"
                value={userForm.email}
                onChange={handleInputChange}
                placeholder="user@example.com"
              />
            </div>
            <div>
              <Label htmlFor="create-description">Description</Label>
              <Input
                id="create-description"
                name="description"
                value={userForm.description}
                onChange={handleInputChange}
                placeholder="Role or position description"
              />
            </div>
            <div>
              <Label htmlFor="create-notes">Notes</Label>
              <Input
                id="create-notes"
                name="notes"
                value={userForm.notes}
                onChange={handleInputChange}
                placeholder="Additional information"
              />
            </div>
            <div>
              <Label htmlFor="create-role">Role</Label>
              <select 
                id="create-role" 
                name="role_id" 
                className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none"
                value={userForm.role_id}
                onChange={(e) => setUserForm({...userForm, role_id: parseInt(e.target.value)})}
              >
                <option value={1}>Administrator</option>
                <option value={2}>Standard User</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateUserDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateUser}>Create User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete User Dialog */}
      <Dialog open={deleteUserDialogOpen} onOpenChange={setDeleteUserDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-destructive">Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="py-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={selectedUser.user_details?.profile_filename || undefined} />
                  <AvatarFallback>
                    {selectedUser.user_details?.name?.[0].toUpperCase() || selectedUser.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{selectedUser.user_details?.name || selectedUser.username}</div>
                  <div className="text-sm text-muted-foreground">@{selectedUser.username}</div>
                  {selectedUser.user_details?.email && (
                    <div className="text-sm text-muted-foreground">{selectedUser.user_details.email}</div>
                  )}
                </div>
              </div>
            </div>
          )}
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setDeleteUserDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleConfirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
