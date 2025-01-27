import BoxesDesignSvg from "../BoxesDesignSvg";
import HeadingAndTitle from "../HeadingAndTitle";
import StudyBoxItem from "../StudyBoxItem";

const studyBoxData = [
	{
		title: "Education",
		description:
			"Get the best of quality education in Uzbekistan with the most skilled professionals.",
		icon: (
			<svg
				width="56"
				height="56"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-[-28px] left-8 p-0.5 w-14 h-14 rounded-md bg-white shadow-xl"
			>
				<path
					d="M40.25 38.3516L28 45.2422L15.75 38.3516V31.0714L12.25 29.1269V40.3984L28 49.2578L43.75 40.3984V29.1269L40.25 31.0714V38.3516Z"
					fill="#1CB5BD"
				/>
				<path
					d="M28 5.02832L3.5 17.732V20.7654L28 34.3762L49 22.7099V32.3746H52.5V17.732L28 5.02832ZM45.5 20.6505L42 22.5948L28 30.373L14 22.5948L10.5 20.6505L8.07417 19.3027L28 8.97085L47.9258 19.3027L45.5 20.6505Z"
					fill="#1CB5BD"
				/>
			</svg>
		),
	},
	{
		title: "Fee Structure",
		description:
			"Low tuition fee﻿﻿﻿ ﻿﻿Medical universities in Uzbekistan Offered low-cost education to Foreign students.﻿",
		icon: (
			<svg
				width="56"
				height="56"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-[-28px] left-8 p-0.5 w-14 h-14 rounded-md bg-white shadow-xl"
			>
				<path
					d="M40.25 38.3516L28 45.2422L15.75 38.3516V31.0714L12.25 29.1269V40.3984L28 49.2578L43.75 40.3984V29.1269L40.25 31.0714V38.3516Z"
					fill="#1CB5BD"
				/>
				<path
					d="M28 5.02832L3.5 17.732V20.7654L28 34.3762L49 22.7099V32.3746H52.5V17.732L28 5.02832ZM45.5 20.6505L42 22.5948L28 30.373L14 22.5948L10.5 20.6505L8.07417 19.3027L28 8.97085L47.9258 19.3027L45.5 20.6505Z"
					fill="#1CB5BD"
				/>
			</svg>
		),
	},
	{
		title: "Admission",
		description: "Direct Admissions to Medical Universities in Uzbekistan",
		icon: (
			<svg
				width="56"
				height="56"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-[-28px] left-8 p-0.5 w-14 h-14 rounded-md bg-white shadow-xl"
			>
				<path
					d="M40.25 38.3516L28 45.2422L15.75 38.3516V31.0714L12.25 29.1269V40.3984L28 49.2578L43.75 40.3984V29.1269L40.25 31.0714V38.3516Z"
					fill="#1CB5BD"
				/>
				<path
					d="M28 5.02832L3.5 17.732V20.7654L28 34.3762L49 22.7099V32.3746H52.5V17.732L28 5.02832ZM45.5 20.6505L42 22.5948L28 30.373L14 22.5948L10.5 20.6505L8.07417 19.3027L28 8.97085L47.9258 19.3027L45.5 20.6505Z"
					fill="#1CB5BD"
				/>
			</svg>
		),
	},
	{
		title: "Accommodation",
		description: "Low cost of living and better accommodation in Uzbekistan.",
		icon: (
			<svg
				width="56"
				height="56"
				viewBox="0 0 56 56"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute top-[-28px] left-8 p-0.5 w-14 h-14 rounded-md bg-white shadow-xl"
			>
				<path
					d="M40.25 38.3516L28 45.2422L15.75 38.3516V31.0714L12.25 29.1269V40.3984L28 49.2578L43.75 40.3984V29.1269L40.25 31.0714V38.3516Z"
					fill="#1CB5BD"
				/>
				<path
					d="M28 5.02832L3.5 17.732V20.7654L28 34.3762L49 22.7099V32.3746H52.5V17.732L28 5.02832ZM45.5 20.6505L42 22.5948L28 30.373L14 22.5948L10.5 20.6505L8.07417 19.3027L28 8.97085L47.9258 19.3027L45.5 20.6505Z"
					fill="#1CB5BD"
				/>
			</svg>
		),
	},
];

export default function StudySection() {
	return (
		<div className="relative w-full bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
			{/* Left-side box on larger screens */}
			<BoxesDesignSvg cname="hidden md:block absolute top-0 left-0 z-0 transform -translate-y-1/2" />

			<div className="relative z-10 flex flex-col items-center py-8 space-y-12">
				{/* Title */}
				<HeadingAndTitle heading1="Why Study MBBS in" heading2="Uzbekistan ?" />

				{/* Study Boxes */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
					{studyBoxData.map((item, index) => (
						<StudyBoxItem
							key={index}
							children={item.icon}
							title={item.title}
							description={item.description}
						/>
					))}
				</div>
			</div>

			{/* Right-side box on larger screens */}
			<BoxesDesignSvg cname="hidden md:block absolute bottom-0 right-0 z-0 transform translate-y-1/2" />
		</div>
	);
}
