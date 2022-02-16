import React, { useEffect, useState } from "react";
import AddTaskInput from "./AddTaskInput";
import Papers from "./Papers";
import ListItem from "./ListItem";

const TodoList = () => {
	let [tasks, setTasks] = useState([]);

	function addTask(task) {
		setTasks([task, ...tasks]);
	}

	function removeTask(index) {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	}

	useEffect(() => {
		(async () => {
			const initalTasks = await (
				await fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/danielMateosLab"
				)
			).json();
			console.log(initalTasks);
		})();
	}, []);

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
