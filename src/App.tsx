import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useGithubOauth } from "./modules/auth/hooks/use-github-oauth";

const App = () => {
	const { GithubCallback } = useGithubOauth();
	const navigate = useNavigate();
	const tokenFromURL = new URLSearchParams(window.location.search).get(
		"access_token",
	);

	useEffect(() => {
		if (tokenFromURL) {
			GithubCallback(tokenFromURL);
			navigate("/home");
		}
	}, [tokenFromURL, navigate, GithubCallback]);

	return <Fragment></Fragment>;
};

export default App;
