import "./App.css";
import FormPage from "./pages/form";
import TablePage from "./pages/table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components

// Add TypeScript types for formData and allFormData

function App() {
	return (
		<div className="App" >
			<Router>
				<Routes>
					<Route path="/form" element={< FormPage />} />
					< Route path="/table" element={< TablePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
