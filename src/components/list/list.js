import React from "react";
import "./list.css";

const List = ({ lists }) => (
	<div className="list-container">
		{lists.length > 0 &&
			lists.map((list) => <div key={list.id}>{list.text}</div>)}
	</div>
);

export default List;
