import React, { useEffect, useState } from "react";
import { FormDataType } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

const TablePage: React.FC = () => {
	const navigate = useNavigate();
	const [allFormData, setAllFormData] = useState<FormDataType[]>([]);

	useEffect(() => {
		const storedData = localStorage.getItem("formData");
		if (storedData) {
			setAllFormData(JSON.parse(storedData));
		}
	}, []);

	return (
		<div>
			<h1>Table Page</h1>
			<table style={{ width: "100%", borderCollapse: "collapse" }}>
				<thead>
					<tr>
						<th
							style={{
								border: "1px solid black",
								padding: "8px",
							}}
						>
							Name
						</th>
						<th
							style={{
								border: "1px solid black",
								padding: "8px",
							}}
						>
							Email
						</th>
					</tr>
				</thead>
				<tbody>
					{allFormData.map((formData: FormDataType, index: number) => (
						<tr key={index}>
							<td
								style={{
									border: "1px solid black",
									padding: "8px",
								}}
							>
								{formData.name}
							</td>
							<td
								style={{
									border: "1px solid black",
									padding: "8px",
								}}
							>
								{formData.email}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<button onClick={() => navigate("/form")}>
				Go Back to Form
			</button>
		</div>
	);
};

export default TablePage;
