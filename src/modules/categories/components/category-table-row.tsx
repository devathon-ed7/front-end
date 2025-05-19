import { Button } from "@/shared/components/UI/button";
import { TableCell, TableRow } from "@/shared/components/UI/table";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { Category } from "../interfaces/categories.interface";


interface CategoryTableRowProps {
  category: Category;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void; 
  onUpdate: (id: string) => void;
  isExpanded: boolean;
}

export const CategoryTableRow = ({ category, onToggle, onDelete, onUpdate, isExpanded }: CategoryTableRowProps) => (
  <Fragment>
    <TableRow
      onClick={() => onToggle(category.id)}
      style={{ cursor: "pointer" }}
    >
       <TableCell>{category.name}</TableCell>
      <TableCell>{category.description}</TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation(); 
            onDelete(category.id); 
          }}
        >
          <Trash2Icon className="h-4 w-4 text-destructive" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation(); 
            onUpdate(category.id); 
          }}
          >
            <PencilIcon className="h-4 w-4 text-primary" />
          </Button>
      </TableCell>
    </TableRow>
    {isExpanded && category.children?.map((subCategory) => (
      <TableRow key={subCategory.id}>
        <TableCell style={{ paddingLeft: "20px" }}>
          {subCategory.name}
        </TableCell>
        <TableCell>{subCategory.description}</TableCell>
      </TableRow>
    ))}
  </Fragment>
)