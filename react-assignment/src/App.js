import "./App.css";
import FormPage from "./pages/form";
import TablePage from "./pages/table";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components

export const FormContext = createContext();

function App() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});

	return (
		<div className="App">
			<FormContext.Provider value={[formData, setFormData]}>
				<Router>
					<Routes>
						<Route path="/form" element={<FormPage />} />
						<Route path="/table" element={<TablePage />} />
					</Routes>
				</Router>
			</FormContext.Provider>
		</div>
	);
}

export default App;
