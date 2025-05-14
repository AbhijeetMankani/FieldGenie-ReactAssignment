import React, { useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FormDataType } from "../interfaces/interfaces";


const FormPage: React.FC = () => {
	let allFormData: FormDataType[] = [];

	const currentForm = localStorage.getItem("currentForm");


	const [formData, setFormData] = React.useState<FormDataType>(currentForm ? JSON.parse(currentForm) : {
		name: "",
		email: "",
	});

	useEffect(() => {
		allFormData = JSON.parse(
			localStorage.getItem("formData") || "[]"
		) as FormDataType[];

		const currentForm = localStorage.getItem("currentForm");
		if (currentForm) {
			const currentFormData = JSON.parse(currentForm);
			setFormData(currentFormData);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem("currentForm", JSON.stringify(formData))
	}, [formData]);

	const navigate = useNavigate();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log("Form submitted", formData);
		allFormData.push(formData);
		localStorage.setItem("formData", JSON.stringify(allFormData));
		localStorage.removeItem("currentForm");

		navigate("/table");
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
