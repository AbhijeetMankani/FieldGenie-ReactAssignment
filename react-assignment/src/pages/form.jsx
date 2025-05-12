import React, { useEffect, useContext } from "react";
import { FormContext } from "../App";

const FormPage = () => {
	const [formData, setFormData] = useContext(FormContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted", formData);
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>Form Page</h1>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: "10px" }}>
					<label
						htmlFor="name"
						style={{ display: "block", marginBottom: "5px" }}
					>
						Name:
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter your name"
						value={formData.name}
						onChange={(e) => {
							let data = {
								...formData,
								name: e.target.value,
							};
							setFormData(data);
						}}
					/>
				</div>
				<div style={{ marginBottom: "10px" }}>
					<label
						htmlFor="email"
						style={{ display: "block", marginBottom: "5px" }}
					>
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email"
						value={formData.email}
						onChange={(e) => {
							let data = {
								...formData,
								email: e.target.value,
							};
							setFormData(data);
						}}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default FormPage;
