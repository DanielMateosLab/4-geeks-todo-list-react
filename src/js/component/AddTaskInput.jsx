import React, { useState } from "react";
import Spinner from "./Spinner";

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
			<div className="list-item">
				{false && <Spinner />}
				<input
					type="text"
					placeholder="What needs to be done?"
					aria-label="add task"
					value={newTask}
					onChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default AddTaskInput;
