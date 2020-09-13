import React, { useState } from "react";
import List from "../list/list";

import "./form.css";

const Form = () => {
	/* Create two hooks so that it will add and update new lists
	 * The first hook is used for adding strings (new list in other words) which is why the useState is empty string
	 * The second hook is used for updating lists a.k.a adding multiple lists
	 * Pay attention to the position of hook values carefully - the second values (updateNewList & updateLists) are
	 * the ones where the states (data, basically) gets changed and you place them outside the render bracket
	 * The first values (newList & lists) and are the ones where the elements gets rendered (changes that you can see on the screen)
	 * and you place them inside the render bracket where you want the HTML elements to get changed based on the states */
	const [newList, updateNewList] = useState("");
	const [lists, updateLists] = useState([]);

	/* Create a variable that will handle the input changes of the app
	 * The event is the thing that triggers when the user did some actions like entering the input
	 * The target is simply pointing to where the changes should occur and in this case,
	 * our target is the 'value' which we will get it from our input entries */
	const handleInputChange = (event) => {
		updateNewList(event.target.value);
	};

	/* Create a variable that will handle the submit changes of the app
	 * The event is the thing that triggers when the user did a action like submitting the list entry
	 * PreventDefault() is the function that prevents the page from refreshing when the event occurs. Always
	 * use this function if you don't want the page to refresh after the event is fired */
	const handleInputSubmit = (event) => {
		event.preventDefault();
		updateLists((previousLists) => [...previousLists, { text: newList }]);
	};

	return (
		<div className="form-container">
			<form onSubmit={handleInputSubmit}>
				<input
					value={newList}
					onChange={handleInputChange}
					placeholder="Enter a new list..."
					className="form-input"
				/>
				<button className="submit-button">Submit</button>
				<List lists={lists} />
			</form>
		</div>
	);
};

export default Form;
