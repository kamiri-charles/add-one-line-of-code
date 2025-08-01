import { motion } from "motion/react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { Contributors } from "../components/Contributors";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Landing() {

	return (
		<div className="min-h-screen relative">
			<AnimatedBackground />

			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
				{/* Header section */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					{/* Project name */}
					<motion.h1
						className="text-4xl text-black sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						one line at a time
					</motion.h1>

					{/* Project description */}
					<motion.p
						className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						An open-source 2D game
					</motion.p>

					<div className="flex w-full items-center justify-center gap-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Link
								to="/play"
								className="inline-flex items-center bg-black text-white text-primary-foreground px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
							>
								<FontAwesomeIcon icon={faPlay} className="w-5 h-5 mr-2" />
								Play Game
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Link
								to="https://github.com/kamiri-charles/add-one-line-of-code"
								target="_blank"
								className="inline-flex items-center bg-black text-white text-primary-foreground px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
							>
								<FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
								Contribute
							</Link>
						</motion.div>
					</div>
				</motion.div>

				{/* Contributors section */}
				<motion.div
					className="w-full max-w-4xl"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<Contributors />
				</motion.div>

				{/* Footer */}
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<p className="text-sm text-muted-foreground">
						Open source • Community driven • Built with ❤️
					</p>
				</motion.div>
			</div>
		</div>
	);
}

export default Landing