"use client";

import { Button } from "@/shared/components/UI/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function UserPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  
  
  const totalUsers = 15; 
  
  return (
    <div className="flex items-center justify-between w-full">
      <div className="text-sm text-muted-foreground">
        Showing <strong>{totalUsers > 0 ? (currentPage - 1) * 5 + 1 : 0}</strong>-<strong>{Math.min(currentPage * 5, totalUsers)}</strong> of <strong>{totalUsers}</strong> users
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
    </div>
  );
}