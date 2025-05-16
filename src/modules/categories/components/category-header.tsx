import { Button } from "@/shared/components/UI/button";

import { PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCategoriesStore } from "../store/categoties.store";

export const CategoryHeader = () => {
  const { t } = useTranslation();
  const setOpen = useCategoriesStore((state) => state.setModalState);
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">{t("categories.title")}</h1>

      <Button className="gap-2" onClick={() => setOpen(true)}>
        <PlusIcon className="h-4 w-4" />
        {t("categories.addCategory")}
      </Button>
    </div>
  );
};
