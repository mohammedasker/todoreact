import React from "react";

import Form from "../form/form";
import List from "../list/list";

import "./container.css";

const Container = () => (
	<div className="container">
		<h1 className="container-header">Todo React</h1>
		<Form />
		<List />
	</div>
);

export default Container;
