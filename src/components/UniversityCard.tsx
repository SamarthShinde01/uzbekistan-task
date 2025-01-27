import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UniversityCardTypes {
	imageSrc: string;
	title: string;
	fees: number;
	duration: number;
}

export default function UniversityCard({
	imageSrc,
	title,
	fees,
	duration,
}: UniversityCardTypes) {
	return (
		<Card className="w-full sm:w-[382px] lg:w-[350px] h-auto sm:h-[500px] overflow-hidden rounded-xl bg-white shadow-lg p-2">
			<div className="relative h-[238px] w-full">
				<Image
					src={imageSrc}
					alt={imageSrc}
					layout="fill"
					className="object-cover rounded-lg"
				/>

				{/* This will position the content at the bottom center of the image */}
				<div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] w-full px-2">
					<div className="h-20 flex items-center gap-3 border border-t-4 border-[#26A69A] p-2 rounded-lg bg-white">
						<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F5F5] border border-[#26A69A]">
							<Building2 className="h-5 w-5 text-[#26A69A]" />
						</div>
						<h3 className="font-semibold text-gray-900">{title}</h3>
					</div>
				</div>
			</div>

			<CardContent className="mt-16 p-4 space-y-4">
				<div className="space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-gray-600">Fee Structure</span>
						<span className="font-medium">
							₹{new Intl.NumberFormat("en-IN").format(fees)}/-
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-600">Duration</span>
						<span className="font-medium">{duration} years</span>
					</div>
				</div>
			</CardContent>

			<CardFooter className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
				<Button
					variant="outline"
					className="w-full rounded-lg border-[#26A69A] text-[#1CB5BD] hover:bg-[#E6F5F5] hover:text-[#26A69A]"
				>
					Read More
				</Button>
				<Button className="w-full rounded-lg bg-[#1CB5BD] text-white hover:bg-[#1E8E84]">
					Apply Now
				</Button>
			</CardFooter>
		</Card>
	);
}
