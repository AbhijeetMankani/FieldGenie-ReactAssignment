import React, { useEffect, useContext } from "react";
import { FormContext } from "../App";

const TablePage = () => {
	const [formData, setFormData] = useContext(FormContext);

	useEffect(() => {
		console.log("Form data updated", formData);
	}, [formData]);

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
					<tr>
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
				</tbody>
			</table>

			<button>
				<a href="/form" style={{ textDecoration: "none" }}>
					Go Back to Form
				</a>
			</button>
		</div>
	);
};
export default TablePage;
