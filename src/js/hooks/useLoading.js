import React, { useState } from "react";

const useLoading = () => {
	const [loading, setLoading] = useState(false);

	async function handleLoading(asyncFunc) {
		setLoading(true);
		await asyncFunc();
		setLoading(false);
	}

	return { loading, handleLoading };
};

export default useLoading;
