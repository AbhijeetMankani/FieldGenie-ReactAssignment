import React, { useEffect, useContext, FormEvent } from "react";
import { FormContext } from "../App";
import { useNavigate } from "react-router-dom";
import { FormContextType, FormDataType } from "../interfaces/interfaces";


const FormPage: React.FC = () => {
	const { allFormData, setAllFormData } = useContext(FormContext) as FormContextType;
	const [formData, setFormData] = React.useState<FormDataType>({
		name: "",
		email: "",
	});

	useEffect(() => {
		localStorage.setItem("formData", JSON.stringify(allFormData));
	}, [formData]);

	const navigate = useNavigate();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log("Form submitted", formData);
		allFormData.push(formData);
		setAllFormData(allFormData);
		localStorage.setItem("formData", JSON.stringify(allFormData));

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
