import { StatsCard } from "../StatsCard";

export default function CountSection() {
	return (
		<div className="w-screen h-[348px] mt-20 px-4 sm:px-12 md:px-28 flex items-center justify-center bg-[#F5F5F7]">
			<div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 items-center justify-center w-full mt-10">
				{/* Stats Cards */}
				<StatsCard image="/stars.png" title="Years of expertise" number="12+" />
				<StatsCard
					image="/graduated.png"
					title="Satisfied students counselled"
					number="1500+"
				/>
				<StatsCard
					image="/books.png"
					title="Universities affiliated with us!"
					number="10"
				/>
				<StatsCard image="/visa.png" title="Visa Assistance" number="100+" />
			</div>
		</div>
	);
}
