import { useRef } from "react";
import { LoginForm } from "@/components";
import { t } from "i18next";
import AuthLayout from "@/layouts/Auth-layout";

const LoginPage = () => {
  const imageUrlRef = useRef('/android-chrome-512x512.png');
  const imageNameRef = useRef('logo');

  return (
    <AuthLayout>
      <div className="flex flex-col items-center space-y-1 text-center text-shadow">
        <img
          src={imageUrlRef.current}
          alt={imageNameRef.current}
          className="w-24 h-24"
        />
        <h1 className="text-white text-4xl font-bold">
          {t("login.title")}
        </h1>
        <h2 className="text-white text-2xl font-bold">
          {t("login.subtitle")}
        </h2>
      </div>

      <div className="max-w-xs mx-auto">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;