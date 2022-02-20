import React from "react";
import TodoList from "./TodoList";

const Home = () => {
	return (
		<div className="app-container">
			<header>
				<h1 className="app-title">todos</h1>
			</header>

			<TodoList />
		</div>
	);
};

export default Home;
