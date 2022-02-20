import React, { useState } from "react";
import ListSection from "./ListSection";
import Spinner from "./Spinner";
import useLoading from "../hooks/useLoading";
import "styles/ListItem.css";

const ListItem = ({ task, index, removeTask, switchTaskIsDone }) => {
	const { loading, handleLoading } = useLoading();

	function handleRemove() {
		handleLoading(() => removeTask(index));
	}

	function handleSwitchDone() {
		handleLoading(() => switchTaskIsDone(index));
	}

	return (
		<ListSection htmlElement="li">
			{loading && <Spinner />}

			<span
				onClick={handleSwitchDone}
				className={task.done ? "done" : ""}>
				{task.label}
			</span>

			<button className="close-btn" onClick={handleRemove}>
				<i className="bi bi-x"></i>
			</button>
		</ListSection>
	);
};

export default ListItem;
