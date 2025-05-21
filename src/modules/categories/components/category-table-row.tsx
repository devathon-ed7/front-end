import { Button } from "@/shared/components/UI/button";
import { TableCell, TableRow } from "@/shared/components/UI/table";
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { Category } from "../interfaces/categories.interface";
import "./category-table-row.css";


interface CategoryTableRowProps {
  category: Category;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void; 
  onUpdate: ( category: Category) => void;
  isExpanded: boolean;
}

export const CategoryTableRow = ({ category, onToggle, onDelete, onUpdate, isExpanded }: CategoryTableRowProps) => {
  const hasChildren = category.children && category.children.length > 0;

  return (
  <Fragment>
    <TableRow
      
      style={{ cursor: hasChildren ? "pointer" : "default" }}
    >
       <TableCell>{category.name}</TableCell>
      <TableCell>{category.description}</TableCell>
      <TableCell className="narrow-column">
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
            onUpdate( category );
          }}
          >
            <PencilIcon className="h-4 w-4 text-primary" />
          </Button>
          {hasChildren && (
            <Button onClick={() => onToggle(category.id)} variant="ghost" size="icon">
              {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </Button>
          )}
      </TableCell>
    </TableRow>
    {isExpanded && hasChildren && category.children?.map((subCategory) => (
      <TableRow key={subCategory.id}>
        <TableCell style={{ paddingLeft: "20px" }}>
          {subCategory.name}
        </TableCell>
        <TableCell>{subCategory.description}</TableCell>
      </TableRow>
    ))}
  </Fragment>
  )
}