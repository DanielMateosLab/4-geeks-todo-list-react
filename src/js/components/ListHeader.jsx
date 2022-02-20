import React, { useState } from "react";
import "styles/ListHeader.css";
import ListSection from "./ListSection";
import Spinner from "./Spinner";
import useLoading from "../hooks/useLoading";
import Link from "./Link";

const ListHeader = ({ addTask, removeAllTasks, hideDone, setHideDone }) => {
	const [newTask, setNewTask] = useState("");
	const { loading, handleLoading } = useLoading();

	function handleChange(event) {
		setNewTask(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		handleLoading(() => addTask(newTask));

		setNewTask("");
	}

	function handleRemoveAll() {
		handleLoading(removeAllTasks);
	}

	function handleSwitchHide() {
		setHideDone(!hideDone);
	}

	return (
		<ListSection htmlElement="header">
			{loading && <Spinner />}

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="What needs to be done?"
					aria-label="add task"
					value={newTask}
					onChange={handleChange}
				/>
			</form>

			<nav>
				<Link
					onClick={handleSwitchHide}
					text={`${hideDone ? "Show" : "Hide"} done tasks`}
				/>
				<Link onClick={handleRemoveAll} text="Clean list" />
			</nav>
		</ListSection>
	);
};

export default ListHeader;
