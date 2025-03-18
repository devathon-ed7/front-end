import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/UI/card";
import { Skeleton } from "@/shared/components/UI/skeleton";

export function UserGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
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
      ))}
    </div>
  );
}