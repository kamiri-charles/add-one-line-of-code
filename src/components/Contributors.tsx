import { useEffect, useState } from "react";
import { contributorUsernames } from "../contributors";


interface Contributor {
	username: string;
	avatarUrl: string;
	profileUrl: string;
}

function CustomAvatar({
	src,
	alt,
	fallback,
	className,
}: {
	src: string;
	alt: string;
	fallback: string;
	className?: string;
}) {
	return (
		<div
			className={`relative overflow-hidden rounded-full bg-muted flex items-center justify-center ${className}`}
		>
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover"
				onError={(e) => {
					const target = e.target as HTMLImageElement;
					target.style.display = "none";
					const fallbackDiv = target.nextElementSibling as HTMLDivElement;
					if (fallbackDiv) {
						fallbackDiv.style.display = "flex";
					}
				}}
			/>
			<div
				className="absolute inset-0 flex items-center justify-center text-muted-foreground"
				style={{ display: "none" }}
			>
				{fallback}
			</div>
		</div>
	);
}

export function Contributors() {
	const [contributors, setContributors] = useState<Contributor[]>([]);

	useEffect(() => {
		async function fetchContributors() {
			const data = await Promise.all(
				contributorUsernames.map(async (username: string) => {
					try {
						const res = await fetch(`https://api.github.com/users/${username}`);
						const user = await res.json();
						return {
							username: user.login,
							avatarUrl: user.avatar_url,
							profileUrl: user.html_url,
						};
					} catch {
						return {
							username,
							avatarUrl: "", // fallback handled in UI
							profileUrl: `https://github.com/${username}`,
						};
					}
				})
			);
			setContributors(data);
		}

		fetchContributors();
	}, []);

	return (
		<div className="text-center">
			<h2 className="mb-8 text-muted-foreground">Meet Our Contributors</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
				{contributors.map((contributor) => (
					<a
						key={contributor.username}
						href={contributor.profileUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center space-y-2 transition-transform hover:scale-105"
					>
						<CustomAvatar
							src={contributor.avatarUrl}
							alt={`${contributor.username}'s avatar`}
							fallback={contributor.username.slice(0, 2).toUpperCase()}
							className="w-16 h-16 ring-2 ring-background shadow-lg group-hover:ring-primary/20 transition-all"
						/>
						<span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
							@{contributor.username}
						</span>
					</a>
				))}
			</div>
		</div>
	);
}
