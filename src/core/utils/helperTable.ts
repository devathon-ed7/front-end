import { Dispatch, SetStateAction } from "react";
import { Order } from "../interfaces/table.interface";

export const descendingComparator = <T>(
	a: T,
	b: T,
	orderBy: keyof T,
): number => {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
};

export const getComparator = <Key extends keyof any>(
	order: Order,
	orderBy: Key,
): ((
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string },
) => number) => {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => descendingComparator(a, b, orderBy) * -1;
};

export const createHeadCells = (
	cells: {
		id: string;
		numeric?: boolean;
		disablePadding?: boolean;
		label: string;
	}[],
): HeadCelll[] => {
	return cells.map(
		({ id, numeric = false, disablePadding = false, label }) => ({
			id,
			numeric,
			disablePadding,
			label,
		}),
	);
};

export const getColumnKeys = (
	data: Array<Record<string, any>>,
	columnDefinitions?: Record<string, any>,
) => {
	return columnDefinitions
		? Object.keys(columnDefinitions)
		: Object.keys(data.length > 0 ? data[0] : {});
};

export const createSortHandler = <TableData>(
	order: Order,
	orderBy: keyof TableData,
	setOrder: Dispatch<SetStateAction<Order>>,
	setOrderBy: Dispatch<SetStateAction<keyof TableData>>,
) => {
	return (event: React.MouseEvent<unknown>, property: keyof TableData) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};
};

export const createSelectAllHandler = <T>(
	rows: T[],
	setSelected: Dispatch<SetStateAction<number[]>>,
) => {
	return (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => (n as any).id);
			setSelected(newSelected);
		} else {
			setSelected([]);
		}
	};
};
