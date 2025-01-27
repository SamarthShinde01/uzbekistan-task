import Image from "next/image";
import UniversityCard from "../UniversityCard";
import HeadingAndTitle from "../HeadingAndTitle";

export default function ExploreSection() {
	return (
		<div className="hidden md:block relative w-full h-auto md:h-[814px]">
			{/* Background Image */}
			<Image
				src="/teenagers.png"
				alt="teenagers"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				className="z-0 w-full h-full"
			/>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#4CA9A8F5] via-[#306261F5] to-[#2B3532F5] opacity-95 z-10"></div>

			{/* Content */}
			<div className="absolute inset-0 flex flex-col items-center py-12 px-4 sm:px-16 md:px-28 space-y-16 z-20">
				<HeadingAndTitle
					heading1="Explore Medical Universities"
					heading2="in Uzbekistan"
					title="We are affiliated with these medical universities"
				/>

				{/* BOXES */}
				<div className="flex flex-wrap justify-center gap-6">
					{/* Each UniversityCard Component */}
					<UniversityCard
						imageSrc="/harvard.png"
						title="Andijan State Medical Institute"
						fees={522111}
						duration={4}
					/>
					<UniversityCard
						imageSrc="/harvard.png"
						title="Andijan State Medical Institute"
						fees={522111}
						duration={4}
					/>
					<UniversityCard
						imageSrc="/harvard.png"
						title="Andijan State Medical Institute"
						fees={522111}
						duration={4}
					/>
				</div>
			</div>
		</div>
	);
}
