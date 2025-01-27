import Image from "next/image";

interface ServicesTypes {
	image: string;
	title: string;
	description: string;
}

export default function ServiceCard({
	image,
	title,
	description,
}: ServicesTypes) {
	return (
		<div className="w-full sm:w-[90%] sm:max-w-sm md:w-[300px] md:h-[290px] rounded-md bg-white flex flex-col items-center space-y-6 text-center py-6 shadow-lg">
			{/* Image */}
			<div className="h-[100px] w-[100px] flex items-center justify-center">
				<Image
					src={image}
					alt={title}
					height={100}
					width={100}
					className="object-contain"
				/>
			</div>

			{/* Title and Description */}
			<div className="space-y-2 px-4">
				<h1 className="text-[#1CB5BD] text-lg sm:text-xl font-medium">
					{title}
				</h1>
				<span className="text-sm text-black">{description}</span>
			</div>
		</div>
	);
}
