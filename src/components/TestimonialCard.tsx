import { Card, CardContent } from "@/components/ui/card";
import { TestinomialTypes, TestinomialData } from "@/data/Data";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard({ data }: { data: TestinomialTypes }) {
	return (
		<Card
			className={`relative w-full max-w-md overflow-hidden shadow-2xl ${data.className}`}
		>
			<CardContent className="p-6 flex flex-col items-center text-center">
				{/* Image Section */}
				<div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-4">
					<Image
						src={data.imageUrl}
						alt={data.name}
						width={80}
						height={80}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Name Section */}
				<h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-1">
					{data.name}
				</h3>

				{/* Title Section */}
				<p className="text-sm sm:text-base text-[#1E1E1EA6] mb-3">
					{data.title}
				</p>

				{/* Description Section */}
				<p className="text-[#1E1E1EA6] mb-4 text-sm sm:text-base leading-relaxed">
					{data.description}
				</p>

				{/* Rating Section */}
				<div className="flex gap-1">
					{TestinomialData.map((_, i) => (
						<Star
							key={i}
							className={`w-5 h-5 ${
								i < data.rating
									? "fill-[#1CB5BD] text-[#1CB5BD]"
									: "text-gray-300"
							}`}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
