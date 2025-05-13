import "./App.css";
import { FormContextType, FormDataType } from "./interfaces/interfaces";
import FormPage from "./pages/form";
import TablePage from "./pages/table";
import { useState, createContext, useEffect, use } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components

// Add TypeScript types for formData and allFormData
export const FormContext = createContext<FormContextType | null>(null);

function App() {
	const [allFormData, setAllFormData] = useState<FormDataType[]>([]);

	useEffect(() => {
		const storedData = localStorage.getItem("formData");
		setAllFormData(storedData ? JSON.parse(storedData) : []);
	}, []);

	return (
		<div className="App" >
			<FormContext.Provider value={{ allFormData, setAllFormData }}>
				<Router>
					<Routes>
						<Route path="/form" element={< FormPage />} />
						< Route path="/table" element={< TablePage />} />
					</Routes>
				</Router>
			</FormContext.Provider>
		</div>
	);
}

export default App;
