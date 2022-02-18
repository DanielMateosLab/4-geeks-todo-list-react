import React, { useState } from "react";
import Spinner from "./Spinner";

const AddTaskInput = ({ addTask, removeAllTasks }) => {
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
		<form onSubmit={handleSubmit}>
			<div className="list-item">
				{loading && <Spinner />}
				<input
					type="text"
					placeholder="What needs to be done?"
					aria-label="add task"
					value={newTask}
					onChange={handleChange}
				/>
				<a href="#" onClick={handleRemoveAll}>
					Remove all
				</a>
			</div>
		</form>
	);
};

export default AddTaskInput;
