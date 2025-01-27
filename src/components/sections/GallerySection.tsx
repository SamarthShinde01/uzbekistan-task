import Image from "next/image";
import ArrowSvg from "../ArrowSvg";
import HeadingAndTitle from "../HeadingAndTitle";

const GalleryImage: string[] = ["gallery1.png", "gallery2.png", "gallery3.png"];

export default function GallerySection() {
	return (
		<div className="w-full bg-[#F5F5F7] py-16 px-4 sm:px-8">
			<div className="max-w-screen-xl mx-auto flex flex-col items-center text-[#000000] text-center space-y-10">
				<HeadingAndTitle
					heading1="Recent Photo"
					heading2="Gallery"
					title="Celebrating Achievements, One Click at a Time!"
				/>

				{/* Gallery Section */}
				<div className="w-full space-y-8">
					{/* View More Button */}
					<div className="flex justify-end items-center space-x-4">
						<span className="text-[#16A8AF] text-sm cursor-pointer">
							View More
						</span>
						<div className="w-7 h-7 rounded-full bg-[#16A8AF] flex items-center justify-center cursor-pointer">
							<ArrowSvg />
						</div>
					</div>

					{/* Images */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{GalleryImage.map((img, index) => (
							<Image
								key={index}
								src={`/${img}`}
								alt={img}
								width={360}
								height={330}
								className="w-full h-auto object-cover rounded-lg shadow-md transition-transform hover:scale-105"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
