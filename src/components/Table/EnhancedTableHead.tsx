import { HeadCell, Order, TableData } from "@/interfaces";
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TableData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: keyof TableData; // Cambiado a keyof TableData
  rowCount: number;
  headCells: HeadCell[];
}

export const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells } =
    props;
  const createSortHandler =
    (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
  };

 
  const renderSortLabel = (headCell: HeadCell) => (
    <TableSortLabel
      active={orderBy === headCell.id}
      direction={orderBy === headCell.id ? order : 'asc'}
      onClick={createSortHandler(headCell.id as keyof TableData)}
    >
      {headCell.label}
      {orderBy === headCell.id && (
        <Box component="span" sx={{ visuallyHidden: true , paddingLeft: '0.625em' }}>
          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
        </Box>
      )}
    </TableSortLabel>
  );

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {renderSortLabel(headCell)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}