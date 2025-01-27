import { BlogsData } from "@/data/Data";
import BlogCard from "../BlogCard";
import HeadingAndTitle from "../HeadingAndTitle";

export default function BlogsSection() {
	return (
		<div className="w-full px-4 sm:px-12 md:px-28 py-20">
			<div className="flex flex-col items-center text-[#000000] text-center space-y-10">
				<HeadingAndTitle
					heading1="Recent Latest"
					heading2="Blogs"
					title="	Empowering Future Doctors with Valuable Information!"
				/>

				{/* Blog Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{BlogsData.map((data, index) => (
						<BlogCard blog={data} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
