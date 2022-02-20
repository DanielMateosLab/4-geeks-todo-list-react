import React from "react";
import ListHeader from "./ListHeader";
import Papers from "./Papers";
import ListItem from "./ListItem";
import useTasksApi from "../hooks/useTasksApi";
import ListSection from "./ListSection";

const TodoList = () => {
	const { tasks, addTask, removeTask, removeAllTasks } = useTasksApi();

	return (
		<Papers>
			<main>
				<ListHeader {...{ addTask, removeAllTasks }} />

				<ul>
					{tasks.map((task, index) => (
						<ListItem
							{...{ key: index, index, task, removeTask }}
						/>
					))}
				</ul>

				<ListSection htmlElement="footer">
					{tasks.length
						? tasks.length +
						  ` item${tasks.length > 1 ? "s" : ""} left`
						: "No tasks, add a task"}
				</ListSection>
			</main>
		</Papers>
	);
};

export default TodoList;
