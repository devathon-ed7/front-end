// Server Component - Acts as the main container
import { Suspense } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/UI/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/UI/tabs";
import { UserHeader } from "../components/UserHeader";
import { UserSearchProvider } from "../context/UserSearchContext";
import { UsersDialogProvider } from "../context/UserDialogContext";
import { UserPagination } from "../components/UserPagination";
import { UserCardHeader } from "../components/UserCardHeader";
import { UserGridContainer } from "../components/UserGridContainer";
import { UserGridSkeleton } from "../components/UserGridSkeleton";
import { UserTableContainer } from "../components/UserTableContainer";
import { UserTableSkeleton } from "../components/UserTableSkeleton";
import { UserTabsTriggers } from "../components/UserTabsTriggers";
import { UserDialogs } from "../components/UserDialogs";

export const UserPage = () => {
  return (
    <div className="space-y-6 p-1 md:p-0">
      <UserSearchProvider>
        <UsersDialogProvider>
          {/* Header is a server component */}
          <UserHeader />

          <Card>
            {/* Card Header with search and filters */}
            <UserCardHeader />

            <CardContent>
              <Tabs defaultValue="list" className="w-full">
                <TabsList className="mb-4">
                  <UserTabsTriggers />
                </TabsList>
                
                <TabsContent value="list">
                  <Suspense fallback={<UserTableSkeleton />}>
                    <UserTableContainer />
                  </Suspense>
                </TabsContent>
                
                <TabsContent value="grid">
                  <Suspense fallback={<UserGridSkeleton />}>
                    <UserGridContainer />
                  </Suspense>
                </TabsContent>
              </Tabs>
            </CardContent>

            <CardFooter className="flex items-center justify-between border-t p-4">
              <UserPagination />
            </CardFooter>

            {/* All dialogs are client components */}
            <UserDialogs />
          </Card>
        </UsersDialogProvider>
      </UserSearchProvider>
    </div>
  );
};