import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import { DialogResult } from "@/components/UI/DialogResult";
import { Align, Order, TableData } from "@/interfaces";
import {
  createHeadCells,
  createSelectAllHandler,
  createSortHandler,
  getColumnKeys,
} from "@/utils/helperTable";
import { EnhancedTableHead } from "./EnhancedTableHead";
interface BasicTableProps {
  loading: boolean;
  data: TableData[];
  deleteUserById: (id: string) => void;
  columnDefinitions?: {
    [key: string]: {
      label: string;
      align?: Align;
    };
    actions?: {
      label: string;
      align?: Align;
      render: (rowData: any) => React.ReactNode;
    };
  };
  className?: string;
  emptyMessage?: string;
}

export const BasicTable: React.FC<BasicTableProps> = ({
  data,
  deleteUserById,
  columnDefinitions = {},
  className,
  emptyMessage,
}) => {
  const columns = getColumnKeys(data, columnDefinitions);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof TableData>("username");
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = createSortHandler(
    order,
    orderBy,
    setOrder,
    setOrderBy
  );
  const [selected, setSelected] = useState<number[]>([]);
  const handleSelectAllClick = createSelectAllHandler(data, setSelected);
  const headCells = createHeadCells(
    Object.entries(columnDefinitions).map(([key, value]) => ({
      id: key,
      label: value.label,
      align: value.align,
      numeric: false,
      disablePadding: false,
    }))
  );
  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const sortedData = [...data].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <TableContainer component={Paper} className={className}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/*<TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column} align={columnDefinitions[column]?.align || 'right'}>
                {columnDefinitions[column]?.label || column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>*/}

        <EnhancedTableHead
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={data.length}
          headCells={headCells}
        />
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
              }}
              onClick={(event) => handleClick(event, row.id)}
              role="checkbox"
              aria-checked={isSelected}
              tabIndex={-1}
              selected={isSelected(index)}
            >
              {columns.map((column) => (
                <TableCell
                  key={`${index}-${column}`}
                  align={columnDefinitions[column].align || "right"}
                >
                  {column === "action"
                    ? columnDefinitions[column].render(row)
                    : row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {data.length === 0 && <SkeletonRow rowsNum={10} />}
        </TableBody>
      </Table>
      <DialogResult
        handleDialogResultConfirm={(idRegister) => deleteUserById(idRegister)}
      />
    </TableContainer>
  );
};

const SkeletonRow = ({ rowsNum }: { rowsNum: number }) => {
  return [...Array(rowsNum)].map((_row, index) => (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
    </TableRow>
  ));
};
