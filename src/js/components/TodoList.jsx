import React, { useState } from "react";
import ListHeader from "./ListHeader";
import Papers from "./Papers";
import useTasksApi from "../hooks/useTasksApi";
import ListFooter from "./ListFooter";
import ListTasks from "./ListTasks";

const TodoList = () => {
	const { tasks, addTask, switchTaskIsDone, removeTask, removeAllTasks } =
		useTasksApi();

	const [hideDone, setHideDone] = useState(false);

	return (
		<Papers>
			<main>
				<ListHeader
					{...{ addTask, removeAllTasks, hideDone, setHideDone }}
				/>

				<ListTasks
					{...{ tasks, switchTaskIsDone, removeTask, hideDone }}
				/>

				<ListFooter tasksCount={tasks.length} />
			</main>
		</Papers>
	);
};

export default TodoList;
