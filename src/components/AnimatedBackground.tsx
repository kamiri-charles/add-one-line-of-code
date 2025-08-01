import { motion } from "motion/react";

export function AnimatedBackground() {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			{/* Base gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

			{/* Floating geometric shapes */}
			<motion.div
				className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"
				animate={{
					x: [0, 100, 0],
					y: [0, -50, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-lg blur-lg rotate-45"
				animate={{
					x: [0, -80, 0],
					y: [0, 60, 0],
					rotate: [45, 225, 45],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute top-1/2 right-1/3 w-20 h-20 bg-secondary/15 rounded-full blur-lg"
				animate={{
					x: [0, 60, 0],
					y: [0, -80, 0],
					scale: [1, 0.8, 1],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute top-1/6 right-1/2 w-16 h-16 bg-primary/8 rounded-lg blur-md"
				animate={{
					x: [0, -40, 0],
					y: [0, 70, 0],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 22,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Subtle grid pattern */}
			<div
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage: `
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px),
            linear-gradient(var(--color-border) 1px, transparent 1px)
          `,
					backgroundSize: "60px 60px",
				}}
			/>
		</div>
	);
}
