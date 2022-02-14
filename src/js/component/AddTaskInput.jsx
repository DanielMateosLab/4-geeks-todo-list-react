import React, { useState } from "react";

const AddTaskInput = ({ addTask }) => {
	const [newTask, setNewTask] = useState("");

	function handleChange(event) {
		setNewTask(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		addTask(newTask);
		setNewTask("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="What needs to be done?"
				aria-label="add task"
				className="list-item"
				value={newTask}
				onChange={handleChange}
			/>
		</form>
	);
};

export default AddTaskInput;
