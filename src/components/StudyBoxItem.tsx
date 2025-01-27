interface StudyBoxTypes {
	title: string;
	children: React.ReactNode;
	description: string;
}

export default function StudyBoxItem({
	title,
	children,
	description,
}: StudyBoxTypes) {
	return (
		<div className="w-full sm:w-[282px] md:w-[320px] lg:w-[350px] h-auto relative border-[#16A8AF] border-2 rounded-md bg-[#F5F5F5] pr-5 mb-6">
			{children}

			<div className="w-full h-auto rounded-md border-[#16A8AF] mt-14">
				<div className="mx-4 sm:mx-6 md:mx-8 my-5 space-y-3">
					<h1 className="text-lg sm:text-xl md:text-2xl text-[#081D18] font-semibold">
						{title}
					</h1>
					<div className="h-1 w-16 sm:w-20 bg-[#16A8AF]" />
					<p className="text-sm sm:text-base md:text-lg text-[#505050] leading-[1.75] tracking-wide">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
