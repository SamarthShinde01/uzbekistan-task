import { Star } from "lucide-react";
import Image from "next/image";

const UserImages: string[] = [
	"user1.png",
	"user2.png",
	"user3.png",
	"user4.png",
];

export default function Testimonial() {
	return (
		<div className="flex flex-col items-start space-y-0 p-4 bg-white rounded-lg shadow-md w-[240px] mt-[100px]">
			<div className="flex items-center gap-2">
				<div className="flex -space-x-2 overflow-hidden">
					{UserImages.map((user, index) => (
						<Image
							key={index}
							src={`/${user}`}
							alt={`User ${user}`}
							width={40}
							height={40}
							className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
						/>
					))}
				</div>

				<div className="text-xl font-semibold text-slate-800">2400+</div>
			</div>

			<span className="text-lg font-normal text-slate-800">Happy Students</span>

			<div className="flex items-center space-x-1">
				<div className="flex">
					{[1, 2, 3, 4].map((id) => (
						<Star key={id} className="w-4 h-4 text-yellow-400 fill-current" />
					))}
					<Star
						className="w-4 h-4 text-yellow-400 fill-current"
						style={{ clipPath: "inset(0 50% 0 0)" }}
					/>
				</div>
				<span className="text-sm text-gray-600">(4.7 stars)</span>
			</div>
		</div>
	);
}
