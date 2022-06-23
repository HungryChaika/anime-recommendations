import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "./App.css";
import Anime from "../../pages/Anime";

const App = observer(() => {
	return (
		<div className="App">
			<Anime />
		</div>
	);
});

export default App;
