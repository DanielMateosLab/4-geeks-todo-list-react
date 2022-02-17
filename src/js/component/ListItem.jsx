import React from "react";
import Spinner from "./Spinner";

const ListItem = ({ task, index, removeTask }) => (
	<li className="list-item">
		{false && <Spinner />}

		{task.label}

		<button className="close-btn" onClick={() => removeTask(index)}>
			<i className="bi bi-x"></i>
		</button>
	</li>
);

export default ListItem;
