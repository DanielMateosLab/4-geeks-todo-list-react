import React, { useState } from "react";
import Spinner from "./Spinner";

const AddTaskInput = ({ addTask }) => {
	const [newTask, setNewTask] = useState("");
	const [loading, setLoading] = useState(false);

	function handleChange(event) {
		setNewTask(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);

		await addTask(newTask);
		setNewTask("");

		setLoading(false);
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
			</div>
		</form>
	);
};

export default AddTaskInput;
