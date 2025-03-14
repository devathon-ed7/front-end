import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { useOauth } from "./modules/auth/hooks/use-oauth";

const App = () => {
	const { setOauthUser } = useOauth();
	const navigate = useNavigate();
	const tokenFromURL = new URLSearchParams(window.location.search).get(
		"access_token",
	);
	const userNameFromURL = new URLSearchParams(window.location.search).get("name");
	const userEmailFromURL = new URLSearchParams(window.location.search).get("email");
	const userAvatarFromURL = new URLSearchParams(window.location.search).get("picture");

	const userData = {
		full_name: userNameFromURL || undefined,
		email: userEmailFromURL || undefined,
		user_details: {
			profile_filename: userAvatarFromURL || null, 
		},
	};

	useEffect(() => {
		if (tokenFromURL) {
			setOauthUser(tokenFromURL, userData);
			navigate("/home");
		}
	}, [tokenFromURL, userData,navigate, setOauthUser]);

	return <Fragment></Fragment>;
};

export default App;
