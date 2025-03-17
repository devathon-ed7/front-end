
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PageTitle = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const pageTitles = [
    { path: "/dashboard", title: t("dashboard.title") },
    { path: "/transaccions", title: t("dashboard.transactions") },
    { path: "/suppliers", title: t("dashboard.suppliers") },
    { path: "/users", title: t("dashboard.users") },
    { path: "/products", title: t("dashboard.products") },
    { path: "/configuration", title: t("dashboard.configuration") },
  ];

  const currentTitle = pageTitles.find(route =>
    location.pathname.includes(route.path) && route.path !== "/dashboard"
  );

  return currentTitle ? currentTitle.title : t("dashboard.title");
};

export default PageTitle;