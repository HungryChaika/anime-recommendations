import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import AnimeStore from "./store/AnimeStore";
import "bootstrap/dist/css/bootstrap.min.css";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Context.Provider
			value={{
				anime: new AnimeStore(),
			}}
		>
			<App />
		</Context.Provider>
	</React.StrictMode>
);
