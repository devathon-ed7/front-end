import ReactDOM from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import AppHookContainer from "./App-hook-container.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppHookContainer />
	</StrictMode>,
);
