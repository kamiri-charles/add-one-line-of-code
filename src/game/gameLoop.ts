import { type Player, updatePlayer, drawPlayer } from "./player";
import type { Keys } from "./input";

export function startGameLoop(
	ctx: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement,
	player: Player,
	keys: Keys
) {
	function update() {
		updatePlayer(player, keys, canvas.width);
	}

	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawPlayer(ctx, player);
	}

	function loop() {
		update();
		draw();
		requestAnimationFrame(loop);
	}

	loop();
}
