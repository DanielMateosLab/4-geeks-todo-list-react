import React, { useState } from "react";
import AddTaskInput from "./AddTaskInput";
import Papers from "./Papers";
import ListItem from "./ListItem";

const TodoList = () => {
	let [tasks, setTasks] = useState([
		"Do laundry",
		"Make dinner",
		"Have a shower",
	]);

	function addTask(task) {
		setTasks([task, ...tasks]);
	}

	function removeTask(index) {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	}

	return (
		<Papers>
			<main>
				<AddTaskInput addTask={addTask} />

				<ul>
					{tasks.map((task, index) => (
						<ListItem
							{...{ key: index, index, task, removeTask }}
						/>
					))}
				</ul>

				<footer>
					{tasks.length
						? tasks.length +
						  ` item${tasks.length > 1 ? "s" : ""} left`
						: "No tasks, add a task"}
				</footer>
			</main>
		</Papers>
	);
};

export default TodoList;
