import React, { useState } from "react";
import AddTaskInput from "./AddTaskInput";
import ListItem from "./ListItem";

const TodoList = () => {
	let [tasks, setTasks] = useState(["Do laundry"]);

	function addTask(task) {
		setTasks([...tasks, task]);
	}

	function removeTask(index) {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	}

	return (
		<main className="todo-list">
			<AddTaskInput addTask={addTask} />

			<ul>
				{tasks.map((task, index) => (
					<ListItem {...{ key: index, index, task, removeTask }} />
				))}
			</ul>

			<footer>
				{tasks.length
					? tasks.length + ` item${tasks.length > 1 ? "s" : ""} left`
					: "No tasks, add a task"}
			</footer>
		</main>
	);
};

export default TodoList;
