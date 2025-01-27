import Image from "next/image";
import PartnetImageOrnament from "../PartnerImageOrnament";
import HeadingAndTitle from "../HeadingAndTitle";

export default function PartnersSection() {
	return (
		<div className="relative w-full h-auto px-4 sm:px-12 md:px-28">
			<div className="flex items-center flex-col my-12 text-[#000000] text-center space-y-10 sm:space-y-12 md:space-y-20">
				{/* Heading and Title */}
				<HeadingAndTitle
					heading1="Our Partners"
					heading2="University"
					title="We are affiliated with these medical universities"
				/>

				{/* Partner Images */}
				<div className="grid grid-cols-2  md:flex items-center justify-center gap-5 sm:gap-8 md:gap-10">
					<Image
						src="/partner1.png"
						alt="partner1"
						height={120}
						width={120}
						className="md:w-1/4"
					/>
					<Image
						src="/partner2.png"
						alt="partner2"
						height={120}
						width={120}
						className="md:w-1/4"
					/>
					<Image
						src="/partner3.png"
						alt="partner3"
						height={120}
						width={120}
						className="md:w-1/4"
					/>
					<Image
						src="/partner4.png"
						alt="partner4"
						height={120}
						width={120}
						className="md:w-1/4"
					/>
				</div>
			</div>
			{/* Partner Image Ornament */}
			<PartnetImageOrnament />
		</div>
	);
}
