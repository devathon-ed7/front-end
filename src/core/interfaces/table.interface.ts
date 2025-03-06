export type Order = 'asc' | 'desc';
export type Align = 'left' | 'right' | 'center';

export interface TableData extends Record<string, any> {
  [key: string]: any;
}

export interface HeadCell {
  disablePadding: boolean;
  id: string | number;
  label: string;
  numeric: boolean;
}


