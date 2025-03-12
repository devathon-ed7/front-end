import { useRef, useState } from "react";

import {
	GithubClientId,
	GoogleClientId,
	GoogleRedirectUri,
	GoogleScope,
} from "@/core/constants/API";
import { SignInCard } from "@/modules/auth/components/sign-in-card";
import { SignUpCard } from "@/modules/auth/components/sign-up-card";
import { SignInFlow } from "@/modules/auth/types/types";
import { useTheme } from "@/shared/components/theme-provider";
import AuthLayout from "@/shared/layouts/Auth-layout";
import { t } from "i18next";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const AuthPage = () => {
	const imageUrlRef = useRef("/android-chrome-512x512.png");
	const imageNameRef = useRef("logo");
	const [state, setState] = useState<SignInFlow>("signIn");
	const { i18n } = useTranslation();
	const { theme, setTheme } = useTheme();

	const currentLanguage = i18n.language;

	const loginWithGitHub = () => {
		window.location.assign(
			`https://github.com/login/oauth/authorize?client_id=${GithubClientId}`,
		);
	};

	const loginWithGoogle = () => {
		window.location.assign(
			`https://accounts.google.com/o/oauth2/v2/auth?client_id=${GoogleClientId}&redirect_uri=${GoogleRedirectUri}&response_type=code&scope=${GoogleScope}`,
		);
	};

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<AuthLayout>
			<div className="flex flex-col items-center justify-between min-h-screen">
				<div className="flex flex-col items-center p-8 text-center text-shadow">
					<img
						src={imageUrlRef.current}
						alt={imageNameRef.current}
						className="w-24 h-24"
					/>
					<h1 className="text-white text-4xl font-bold">{t("auth.title")}</h1>
					<h2 className="text-white text-2xl font-bold">
						{t("auth.subtitle")}
					</h2>
				</div>

				<div className="md:h-auto md:w-[420px]">
					{state === "signIn" ? (
						<SignInCard
							setState={setState}
							loginWithGitHub={loginWithGitHub}
							loginWithGoogle={loginWithGoogle}
						/>
					) : (
						<SignUpCard
							setState={setState}
							loginWithGitHub={loginWithGitHub}
							loginWithGoogle={loginWithGoogle}
						/>
					)}
				</div>

				<div className="flex items-center self-start pl-16 pb-16 gap-x-3.5">
					{currentLanguage === "en" ? (
						<button
							className="text-lg font-bold tracking-wider  text-white dark:text-white"
							onClick={() => changeLanguage("es")}
						>
							Español
						</button>
					) : (
						<button
							className="text-lg font-bold tracking-wider text-white dark:text-white"
							onClick={() => changeLanguage("en")}
						>
							English
						</button>
					)}

					{theme === "light" ? (
						<button
							className="text-white text-center gap-x-1.5 flex"
							onClick={() => setTheme("dark")}
						>
							<MoonIcon /> {t("common.dark")}
						</button>
					) : (
						<button
							className="text-white text-center flex gap-x-1.5"
							onClick={() => setTheme("light")}
						>
							<SunIcon /> {t("common.light")}
						</button>
					)}
				</div>
			</div>
		</AuthLayout>
	);
};

export default AuthPage;
