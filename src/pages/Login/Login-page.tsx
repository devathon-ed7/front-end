import { useRef } from "react";
import { LoginForm } from "@/components";
import { t } from "i18next";
import AuthLayout from "@/layouts/Auth-layout";
const loginWithGitHub = () => {
  window.location.assign(
    "https://github.com/login/oauth/authorize?client_id=Ov23libyTVPFqfQLhJCV"
  );
};

const LoginPage = () => {
  const imageUrlRef = useRef("/android-chrome-512x512.png");
  const imageNameRef = useRef("logo");

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

      <div className="max-w-xs mx-auto">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <LoginForm />
          <div className="border flex flex-col justify-center shadow-lg">
            <img
              className="mb-4"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              width="150"
            ></img>

            <button onClick={loginWithGitHub}>Login with github</button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
