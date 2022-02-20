import React, { useState } from "react";
import ListSection from "./ListSection";
import Spinner from "./Spinner";
import "styles/ListHeader.css";

const ListHeader = ({ addTask, removeAllTasks }) => {
	const [newTask, setNewTask] = useState("");
	const [loading, setLoading] = useState(false);

	function handleChange(event) {
		setNewTask(event.target.value);
	}

	async function handleLoading(asyncFunc) {
		setLoading(true);
		await asyncFunc();
		setLoading(false);
	}

	function handleSubmit(event) {
		event.preventDefault();

		handleLoading(() => addTask(newTask));

		setNewTask("");
	}

	function handleRemoveAll(event) {
		event.preventDefault();

		handleLoading(removeAllTasks);
	}

	return (
		<ListSection htmlElement="header">
			{loading && <Spinner />}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="What needs to be done?"
					aria-label="add task"
					value={newTask}
					onChange={handleChange}
				/>
			</form>
			<a href="#" onClick={handleRemoveAll}>
				Clean list
			</a>
		</ListSection>
	);
};

export default ListHeader;
