import React from "react";

const Papers = ({ children }) => (
	<div className="paper parent-paper">
		<div className="paper overhead">
			<div className="paper overhead">{children}</div>
		</div>
	</div>
);

export default Papers;
