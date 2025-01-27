interface WhySectionTypes {
	svg: React.ReactElement;
	title: string;
	description: string;
}

export default function WhySectionItem({
	svg,
	title,
	description,
}: WhySectionTypes) {
	return (
		<div className="flex flex-col md:flex-row items-start gap-y-4 md:gap-x-4">
			{/* SVG Section */}
			<div className="flex items-center justify-center">{svg}</div>

			{/* Title and Description */}
			<div className="flex flex-col items-start space-y-2">
				<h2 className="text-lg md:text-xl font-semibold text-black">{title}</h2>
				<p className="text-sm md:text-base text-black">{description}</p>
			</div>
		</div>
	);
}
