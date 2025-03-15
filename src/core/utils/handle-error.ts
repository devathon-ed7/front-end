import { t } from "i18next";

export const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    let message = error.message;

    if (message.includes("404")) {
      return t("exception.productNotFound");
    } else if (message.includes("400")) {
      return t("exception.invalidRequest");
    }

    return message;
  }
  return t("exception.unknownError");
};
