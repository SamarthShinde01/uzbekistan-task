import { TestinomialData } from "@/data/Data";
import TestimonialCard from "../TestimonialCard";
import HeadingAndTitle from "../HeadingAndTitle";

export default function StudentsSection() {
	return (
		<div className="w-full h-auto py-20 px-4 sm:px-12 md:px-28">
			<div className="flex flex-col items-center text-[#000000] text-center space-y-10">
				{/* Heading */}
				<HeadingAndTitle
					heading1="Our Happy"
					heading2="Students"
					title="Hear What Our Students Have to Say"
				/>

				{/* Testimonials */}
				<div className="flex flex-wrap justify-center gap-8">
					{TestinomialData.map((data, index) => (
						<TestimonialCard data={data} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
