import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { BlogTypes } from "@/data/Data";

export default function BlogCard({ blog }: { blog: BlogTypes }) {
	return (
		<Card className="w-full sm:w-[366px] p-3 overflow-hidden border-[#16A8AF]">
			{/* Header with Image */}
			<CardHeader className="relative h-48">
				<Image
					src={blog.image || ""}
					alt={blog.title}
					fill
					className="object-cover"
				/>
			</CardHeader>

			{/* Card Content */}
			<CardContent className="p-4 sm:p-6">
				<h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
					{blog.title}
				</h2>
				<p className="text-sm text-muted-foreground mb-3 sm:mb-4">
					{blog.description}
				</p>
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-4">
						<div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 overflow-hidden">
							<Image
								src={blog.userImg}
								alt={blog.userName}
								width={40}
								height={40}
								className="object-cover"
							/>
						</div>
						<span className="text-sm sm:text-base font-medium text-[#97989F]">
							{blog.userName}
						</span>
						<time className="text-xs sm:text-sm text-muted-foreground text-[#97989F]">
							{blog.date}
						</time>
					</div>
				</div>
			</CardContent>

			{/* Card Footer */}
			<CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 w-full flex items-center justify-center">
				<Button className="bg-teal-500 hover:bg-teal-600 text-white">
					Read more
				</Button>
			</CardFooter>
		</Card>
	);
}
