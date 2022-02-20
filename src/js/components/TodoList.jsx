import React from "react";
import ListHeader from "./ListHeader";
import Papers from "./Papers";
import useTasksApi from "../hooks/useTasksApi";
import ListFooter from "./ListFooter";
import ListTasks from "./ListTasks";

const TodoList = () => {
	const { tasks, addTask, switchTaskIsDone, removeTask, removeAllTasks } =
		useTasksApi();

	return (
		<Papers>
			<main>
				<ListHeader {...{ addTask, removeAllTasks }} />

				<ListTasks {...{ tasks, switchTaskIsDone, removeTask }} />

				<ListFooter tasksCount={tasks.length} />
			</main>
		</Papers>
	);
};

export default TodoList;
