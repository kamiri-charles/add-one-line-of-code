export interface Player {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	speed: number;
	dx: number;
}

export function createPlayer(): Player {
	return {
		x: 100,
		y: 300,
		width: 50,
		height: 50,
		color: "#4CAF50",
		speed: 4,
		dx: 0,
	};
}

export function updatePlayer(
	player: Player,
	keys: { left: boolean; right: boolean },
	canvasWidth: number
) {
	player.dx = 0;
	if (keys.left) player.dx = -player.speed;
	if (keys.right) player.dx = player.speed;
	player.x += player.dx;

	// Clamp to canvas
	player.x = Math.max(0, Math.min(canvasWidth - player.width, player.x));
}

export function drawPlayer(ctx: CanvasRenderingContext2D, player: Player) {
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x, player.y, player.width, player.height);
}
