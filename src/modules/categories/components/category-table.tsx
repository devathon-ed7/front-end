import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/UI/table";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";
import { Category } from "../interfaces/categories.interface";
import { useState } from "react";

interface CategoryTableProps {
  categories: Category[];
}

export const CategoryTable = ({ categories }: CategoryTableProps) => {
  const { t } = useTranslation();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      return newExpanded;
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("categories.category")}</TableHead>
          <TableHead>{t("categories.description")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <Fragment key={category.id}>
            <TableRow
              onClick={() => toggleCategory(category.id)}
              style={{ cursor: "pointer" }}
            >
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
            </TableRow>
            {/* show sub categories */}
            {expandedCategories.has(category.id) &&
              category.children &&
              category.children.map((subCategory) => (
                <TableRow key={subCategory.id}>
                  <TableCell style={{ paddingLeft: "20px" }}>
                    {subCategory.name}
                  </TableCell>
                  <TableCell>{subCategory.description}</TableCell>
                </TableRow>
              ))}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
};
