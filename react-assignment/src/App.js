import "./App.css";
import FormPage from "./pages/form";
import { useState, createContext } from "react";

export const FormContext = createContext();

function App() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});
	return (
		<div className="App">
			<FormContext.Provider value={[formData, setFormData]}>
				<FormPage />
			</FormContext.Provider>
		</div>
	);
}

export default App;
