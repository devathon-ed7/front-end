import { Button } from "@/shared/components/UI/button";

import { PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CategoryHeader = () => {
  const { t } = useTranslation();
  //TODO: Add category creation
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">{t("categories.title")}</h1>

      <Button className="gap-2" onClick={() => {}}>
        <PlusIcon className="h-4 w-4" />
        {t("categories.addCategory")}
      </Button>
    </div>
  );
};
