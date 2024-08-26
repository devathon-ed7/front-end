import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Box, Skeleton } from '@mui/material';

interface TableData extends Record<string, any> {
  [key: string]: any;
}

interface BasicTableProps {
  loading: boolean;
  data: TableData[];
  deleteUserById: (id: string) => void;
  columnDefinitions?: {
    [key: string]: {
      label: string;
      align?: 'left' | 'right' | 'center';
    };
    actions?: {
      label: string;
      align?: 'left' | 'right' | 'center';
      render: (rowData: any) => React.ReactNode;
    };
  };
  className?: string;
  emptyMessage?: string;
}

export const BasicTable: React.FC<BasicTableProps> = ({ loading, data, deleteUserById, columnDefinitions = {}, className, emptyMessage }) => {
  //const columns = Object.keys(data.length > 0 ? data[0] : {});
  const columns = columnDefinitions
    ? Object.keys(columnDefinitions)
    : Object.keys(data.length > 0 ? data[0] : {});
  return (
    <TableContainer component={Paper} className={className}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
           <TableRow>
            {columns.map((column) => (
              <TableCell key={column} align={columnDefinitions[column]?.align || 'right'}>
                {columnDefinitions[column]?.label || column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell
                  key={`${index}-${column}`}
                  align={columnDefinitions[column].align || 'right'}
                >
                  {column === 'action'
                    ? columnDefinitions[column].render(row)
                    : row[column]}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {data.length === 0 && (
            <SkeletonRow rowsNum={10}/>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const SkeletonRow = ({ rowsNum }) => {
  return [...Array(rowsNum)].map((row, index) => (
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
    </TableRow>
  ));
};