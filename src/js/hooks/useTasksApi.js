import { useEffect, useState } from "react";

// There is a bug in the API that does not let us set an empty task list --> []
// Also, when we create a task list we get a sample task, so there is no way to have
// an empty task list.
// To work-around this, we will always ignore the last (oldest) task when getting them
// Also, we put an empty task when updating the list

const useTasksApi = () => {
	const uri =
		"https://assets.breatheco.de/apis/fake/todos/user/danielMateosLab";
	let [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks();
	}, []);

	async function initializeTasks() {
		await fetch(uri, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([]),
		});
	}

	async function getTasks() {
		const res = await fetch(uri);

		if (!res.ok) {
			await initializeTasks();
		} else {
			const newTasks = await (await fetch(uri)).json();

			setTasks(newTasks.slice(0, -1));
		}
	}

	async function updateTasks(newTasks) {
		// We need to add this empty task to the end of the array
		// to work-around the buggy API as described above
		const emptyTask = { label: "A", done: false };

		await fetch(uri, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([...newTasks, emptyTask]),
		});

		await getTasks();
	}

	/** Adds a new task with the given label string */
	async function addTask(label) {
		await updateTasks([{ label, done: false }, ...tasks]);
	}

	/** Removes task with the given index */
	async function removeTask(index) {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);

		await updateTasks(newTasks);
	}

	async function removeAllTasks() {
		await updateTasks([]);
	}

	return {
		tasks,
		addTask,
		removeTask,
		removeAllTasks,
	};
};

export default useTasksApi;
