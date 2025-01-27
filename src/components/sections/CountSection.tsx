import { StatsCard } from "../StatsCard";

export default function CountSection() {
	return (
		<div className="w-full bg-[#F5F5F7] py-12 px-4 sm:px-8">
			<div className="max-w-screen-xl mx-auto flex flex-col items-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center w-full">
					{/* Stats Cards */}
					<StatsCard
						image="/stars.png"
						title="Years of expertise"
						number="12+"
					/>
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
		</div>
	);
}
