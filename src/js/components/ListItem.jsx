import React, { useState } from "react";
import ListSection from "./ListSection";
import Spinner from "./Spinner";

const ListItem = ({ task, index, removeTask }) => {
	let [loading, setLoading] = useState(false);

	async function handleRemove() {
		setLoading(true);

		await removeTask(index);

		setLoading(false);
	}

	return (
		<ListSection htmlElement="li">
			{loading && <Spinner />}

			{task.label}

			<button className="close-btn" onClick={handleRemove}>
				<i className="bi bi-x"></i>
			</button>
		</ListSection>
	);
};

export default ListItem;
