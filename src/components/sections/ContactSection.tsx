import Image from "next/image";
import ContactForm from "../ContactForm";

export default function ContactSection() {
	return (
		<div className="w-full flex items-center justify-center bg-[#A0F5FA] py-10">
			<div className="w-full max-w-6xl flex items-center justify-center gap-10 px-6 sm:px-8 md:px-10">
				{/* Puzzle Image */}
				<Image
					src="/puzzle.png"
					alt="puzzle"
					width={358}
					height={360}
					className="hidden md:block w-1/2 sm:w-2/6"
				/>

				{/* Text and Contact Form */}
				<div className="w-full md:w-3/5 flex flex-col items-start text-start space-y-6">
					<h1 className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-medium">
						Get Personalized Guidance for Your MBBS Journey
					</h1>

					<ContactForm />
				</div>
			</div>
		</div>
	);
}
