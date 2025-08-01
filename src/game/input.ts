export interface Keys {
	left: boolean;
	right: boolean;
}

export function setupInput(keys: Keys) {
	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === "ArrowLeft" || e.key === "a") keys.left = true;
		if (e.key === "ArrowRight" || e.key === "d") keys.right = true;
	}

	function handleKeyUp(e: KeyboardEvent) {
		if (e.key === "ArrowLeft" || e.key === "a") keys.left = false;
		if (e.key === "ArrowRight" || e.key === "d") keys.right = false;
	}

	window.addEventListener("keydown", handleKeyDown);
	window.addEventListener("keyup", handleKeyUp);

	return () => {
		window.removeEventListener("keydown", handleKeyDown);
		window.removeEventListener("keyup", handleKeyUp);
	};
}
