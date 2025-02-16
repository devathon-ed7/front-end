import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { LoginForm } from "@/components";
import { t } from "i18next";
import AuthLayout from "@/layouts/Auth-layout";
import { GithubClientId } from "@/constants/API";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TriangleAlertIcon } from "lucide-react";

const LoginPage = () => {
  const imageUrlRef = useRef("/android-chrome-512x512.png");
  const imageNameRef = useRef("logo");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const loginWithGitHub = () => {
    setPending(true);
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${GithubClientId}`
    );
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center space-y-1 text-center text-shadow">
        <img
          src={imageUrlRef.current}
          alt={imageNameRef.current}
          className="w-24 h-24"
        />
        <h1 className="text-white text-4xl font-bold">{t("login.title")}</h1>
        <h2 className="text-white text-2xl font-bold">{t("login.subtitle")}</h2>
      </div>
      <div className="md:h-auto md:w-[420px]">
        <Card className="w-full h-full p-8">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-lg font-medium">
              Login to continue
            </CardTitle>
          </CardHeader>
          <CardDescription>
            Use your email and password to sign in.
          </CardDescription>
          {!!error && (
            <div className="bg-destructive/15 text-sm p-3 rounded-md flex items-center gap-x-2 text-destructive mb-6">
              <TriangleAlertIcon className="size-4" />
              <p>{error}</p>
            </div>
          )}
          <CardContent className="space-y-5 px-0 pb-0">
            <LoginForm />
            <div className="flex flex-col justify-center ">
              <Separator className="mb-4" />
              <Button
                disabled={pending}
                variant="outline"
                className="w-full relative"
                onClick={() => loginWithGitHub()}
              >
                <FaGithub className="size-5 absolute top-2.5 left-2.5" />
                Continue with Github
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => {}}
              >
                Sign up
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
