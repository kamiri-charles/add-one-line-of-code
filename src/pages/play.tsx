import { useEffect, useRef } from "react";
import { createPlayer } from "../game/player";
import { setupInput } from "../game/input";
import { startGameLoop } from "../game/gameLoop";

function Play() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		canvas.width = 800;
		canvas.height = 600;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const player = createPlayer();
		const keys = { left: false, right: false };
		const cleanupInput = setupInput(keys);

		startGameLoop(ctx, canvas, player, keys);

		return () => {
			cleanupInput();
		};
	}, []);

	return (
		<div className="bg-black h-[100vh] flex items-center justify-center">
			<canvas ref={canvasRef} style={{ border: "1px solid #ccc" }}></canvas>
		</div>
	);
}

export default Play;
