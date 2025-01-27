import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface StatsCardProps {
	number: string;
	className?: string;
	image: string;
	title: string;
}

export function StatsCard({ number, className, image, title }: StatsCardProps) {
	return (
		<Card
			className={`relative w-full sm:w-[204px] md:w-[250px] lg:w-[300px] h-[247px] text-center ${className}`}
		>
			{/* Image */}
			<div className="hidden md:flex absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg items-center justify-center">
				<Image
					src={image}
					alt={image}
					width={40}
					height={40}
					className="object-contain"
				/>
			</div>

			<CardContent className="h-[186px] mt-5 pt-14 px-4">
				<div className="space-y-3">
					{/* Number Text */}
					<p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1CB5BD]">
						{number}
					</p>
					{/* Title Text */}
					<h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-medium text-gray-800">
						{title}
					</h3>
				</div>
			</CardContent>
		</Card>
	);
}
