import React, { useEffect, useState } from "react";
import AddTaskInput from "./AddTaskInput";
import Papers from "./Papers";
import ListItem from "./ListItem";

const TodoList = () => {
	let [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks();
	}, []);

	async function getTasks() {
		const newTasks = await (
			await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/danielMateosLab"
			)
		).json();

		setTasks(newTasks);
	}

	async function updateTasks(newTasks) {
		await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/danielMateosLab",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTasks),
			}
		);

		getTasks();
	}

	function addTask(label) {
		updateTasks([{ label, done: false }, ...tasks]);
	}

	function removeTask(index) {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);

		updateTasks(newTasks);
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
