import Image from "next/image";
import CheckedSvg from "../CheckedSvg";
import Testimonial from "../TestimonialComponent";

export default function HeroSection() {
	return (
		<div className="relative w-full h-auto md:h-[583px]">
			{/* Background Image */}
			<Image
				src="/school-building.png"
				alt="School Building"
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				className="z-0 w-full h-full"
			/>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#64B7C7] via-[#519EA0] to-[#315E61] opacity-90 z-10"></div>

			{/* Main Content */}
			<div className="flex flex-col md:flex-row items-center justify-between relative z-20 space-y-6 md:space-y-0">
				<div className="flex flex-col items-center sm:items-start mt-8 md:mt-20 ml-4 md:ml-20">
					<div className="rounded-sm border-[#45E5EE]"></div>
					<div className="text-white text-4xl sm:text-5xl md:text-6xl w-full sm:w-[533px] h-auto font-medium leading-[1.2] pl-6 md:pl-9 text-center md:text-left">
						Pursue <span className="text-[#081D18]">MBBS</span> in{" "}
						<span className="text-[#081D18]">Uzbekistan</span> Top Universities
					</div>

					<div className="flex flex-col justify-start space-y-2 mt-4">
						<div className="flex items-center gap-2">
							<CheckedSvg />
							<span className="text-lg">
								Low-cost medical education starting from INR 5 Lacs﻿*
							</span>
						</div>
						<div className="flex items-center gap-2">
							<CheckedSvg />
							<span className="text-lg">No Donation & Capitation fees</span>
						</div>
						<div className="flex items-center gap-2">
							<CheckedSvg />
							<span className="text-lg">
								Practice in India & across the world
							</span>
						</div>
						<div className="flex items-center gap-2">
							<CheckedSvg />
							<span className="text-lg">Worldwide accepted degree</span>
						</div>
					</div>

					<button className="mt-5 py-2 px-5 text-white font-medium text-base bg-gradient-to-r from-[#64C7C7] to-[#207C83] rounded-md">
						Apply Now
					</button>
				</div>

				{/* Positioned Doctor Image */}
				<div className="hidden md:block absolute w-[600px] h-[557px] top-[26px] right-[20px] md:right-[0]">
					<Testimonial />
					<Image
						src="/doctor.png"
						alt="doctor"
						layout="fill"
						objectFit="cover"
						className="rounded-md"
					/>
				</div>
			</div>
		</div>
	);
}
