import { AxiosError } from "axios";
import { t } from "i18next";

export const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    
    let message = error.message;

    if (message.includes("404")) {
      return t("exception.NotFound");
    } else if (message.includes("400")) {
      return t("exception.invalidRequest");
    }

    return message;
  }
  return t("exception.unknownError");
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data.message ||  t("exception.unknown_error");
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  }
  return t("exception.unknown_error");
};
