import React from "react";
import "./form.css";

const Form = () => (
	<div className="form-container">
		<input placeholder="Enter a new list..." className="form-input" />
		<button className="submit-button">Submit</button>
	</div>
);

export default Form;
