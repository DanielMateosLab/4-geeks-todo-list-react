import { useEffect, useState } from "react";

const useTasksApi = () => {
	const uri =
		"https://assets.breatheco.de/apis/fake/todos/user/danielMateosLab";
	let [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks();
	}, []);

	async function getTasks() {
		const newTasks = await (await fetch(uri)).json();

		setTasks(newTasks);
	}

	async function updateTasks(newTasks) {
		await fetch(uri, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTasks),
		});

		getTasks();
	}

	/** Adds a new task with the given label string */
	function addTask(label) {
		updateTasks([{ label, done: false }, ...tasks]);
	}

	/** Removes task with the given index */
	function removeTask(index) {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);

		updateTasks(newTasks);
	}

	return {
		tasks,
		addTask,
		removeTask,
	};
};

export default useTasksApi;
