import { TestinomialData } from "@/data/Data";
import TestimonialCard from "../TestimonialCard";
import HeadingAndTitle from "../HeadingAndTitle";

export default function StudentsSection() {
	return (
		<div className="w-full bg-[#F5F5F7] py-16 px-4 sm:px-8">
			<div className="max-w-screen-xl mx-auto flex flex-col items-center text-center text-[#000000] space-y-10">
				{/* Heading */}
				<HeadingAndTitle
					heading1="Our Happy"
					heading2="Students"
					title="Hear What Our Students Have to Say"
				/>

				{/* Testimonials */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					{TestinomialData.map((data, index) => (
						<TestimonialCard data={data} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
