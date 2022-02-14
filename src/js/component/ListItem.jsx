import React from "react";

const ListItem = ({ task, index, removeTask }) => (
	<li className="list-item">
		{task}

		<button className="close-btn" onClick={() => removeTask(index)}>
			<i className="bi bi-x"></i>
		</button>
	</li>
);

export default ListItem;
