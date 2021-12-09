import { useState } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import IndexPage from "./pages/IndexPage";
import data from "./data/applicants";

function App() {
	const [applicants, setApplicants] = useState([
		{
			type: "Applicants",
			list: data,
		},
		{
			type: "Interviewees",
			list: [],
		},
		{
			type: "Accepted",
			list: [],
		},
	]);

	return (
		<AppContext.Provider
			value={{
				applicants,
				setApplicants,
			}}
		>
			<div className="App">
				<IndexPage />
			</div>
		</AppContext.Provider>
	);
}

export default App;
