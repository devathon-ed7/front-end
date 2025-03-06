import { FaGithub, FaGoogle } from "react-icons/fa";


import { TriangleAlertIcon } from "lucide-react";
import { useState } from "react";
import { SignInFlow } from "../types/types";
import { t } from "i18next";
import { Button } from "@/shared/components/UI/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/shared/components/UI/card";
import { SignInForm } from "./sign-in-form";
import { Separator } from "@/shared/components/UI/separator";

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
  loginWithGitHub: () => void;
  loginWithGoogle: () => void;
}

export const SignInCard = ({ setState, loginWithGitHub, loginWithGoogle }: SignInCardProps) => {

  const [error] = useState("");



  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-lg font-medium">{t("auth.loginToContinue")}</CardTitle>
      </CardHeader>
      <CardDescription>{t("auth.useEmailPassword")}</CardDescription>
      {!!error && (
        <div className="bg-destructive/15 text-sm p-3 rounded-md flex items-center gap-x-2 text-destructive mb-6">
          <TriangleAlertIcon className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <SignInForm />

        <Separator className="mb-4" />
        <div className="flex flex-col gap-y-3">
          <Button
            variant="outline"
            className="w-full relative"
            onClick={() => loginWithGitHub()}
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5" />
            {t("auth.continueWithGithub")}
          </Button>
          <Button
            variant="outline"
            className="w-full relative"
            onClick={() => loginWithGoogle()}
          >
            <FaGoogle className="size-5 absolute top-2.5 left-2.5" />
            {t("auth.continueWithGoogle")}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {t("auth.dontHaveAccount")}
          <span
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => setState("signUp")}
          >
            {t("auth.signUp")}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
