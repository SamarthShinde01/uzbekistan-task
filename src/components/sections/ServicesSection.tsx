import ServiceCard from "../ServiceCard";

export default function Services() {
	return (
		<div className="w-full h-[870px] px-4 sm:px-12 md:px-28 bg-gradient-to-r from-[#DCE8EE] via-[#4CD3C3A1] to-[#02D6E1]">
			<div className="flex items-center flex-col">
				{/* Title */}
				<div className="text-2xl sm:text-3xl md:text-4xl my-12 font-semibold text-[#000000]">
					Our Valuable
					<span className="underline text-[#1CB5BD] ml-2">Services</span>
				</div>

				{/* Service Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<ServiceCard
						image="/service1.png"
						title="Admission"
						description="Get the guaranteed admission to top university."
					/>
					<ServiceCard
						image="/service2.png"
						title="Airport Pickup"
						description="Get picked up at airport By our representative."
					/>
					<ServiceCard
						image="/service3.png"
						title="Visa Process"
						description="Fill the visa applications Followed by universities Guidelines.﻿"
					/>
					<ServiceCard
						image="/service5.png"
						title="Documentation"
						description="Verification of legalized documents."
					/>
					<ServiceCard
						image="/service6.png"
						title="Accommodation"
						description="Get the guaranteed admission to top university."
					/>
					<ServiceCard
						image="/service4.png"
						title="Free Counseling﻿﻿"
						description="Get free counseled by our ﻿﻿reputed experts."
					/>
				</div>
			</div>
		</div>
	);
}
