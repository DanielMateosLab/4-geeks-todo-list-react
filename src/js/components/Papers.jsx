import React from "react";
import "styles/Papers.css";

/** Wraps the children elements in a paper that sits over two more papers */
const Papers = ({ children }) => (
	<div className="paper parent-paper">
		<div className="paper overhead">
			<div className="paper overhead">{children}</div>
		</div>
	</div>
);

export default Papers;
