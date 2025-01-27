interface HeadingAndTitleTypes {
	heading1: string;
	heading2: string;
	title?: string;
}

export default function HeadingAndTitle({
	heading1,
	heading2,
	title,
}: HeadingAndTitleTypes) {
	return (
		<div className="text-center">
			<div className="text-2xl md:text-4xl font-semibold">
				{heading1}
				<span className="underline text-[#1CB5BD] ml-2">{heading2}</span>
			</div>
			<span className="text-sm">{title}</span>
		</div>
	);
}
