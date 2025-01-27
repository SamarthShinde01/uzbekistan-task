export interface TestinomialTypes {
	name: string;
	title: string;
	description: string;
	rating: number;
	imageUrl: string;
	className?: any;
}

export interface BlogTypes {
	image: string;
	title: string;
	description: string;
	userImg: string;
	userName: string;
	date: string;
}

export const TestinomialData: TestinomialTypes[] = [
	{
		name: "John Doe",
		title: "MBBS",
		description:
			"Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
		rating: 5,
		imageUrl: "/student1.png",
	},
	{
		name: "Smitha Doe",
		title: "MBBS",
		description:
			"Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
		rating: 5,
		imageUrl: "/student2.png",
	},
	{
		name: "Jaquline Doe",
		title: "MBBS",
		description:
			"Augue nulla montes, eget congue dolor magna vitae porttitor. Mollis aliquam tristique porttitor blandit nibh dui tristique quam......",
		rating: 5,
		imageUrl: "/student3.png",
	},
];

export const BlogsData: BlogTypes[] = [
	{
		image: "/blog1.png",
		title: "5 Reasons to Study MBBS in Russia",
		description:
			"Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized degrees.",
		userImg: "/userImage.png",
		userName: "Tracey Wilson",
		date: "Dec 26,2024",
	},
	{
		image: "/blog2.png",
		title: "5 Reasons to Study MBBS in Russia",
		description:
			"Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized degrees.",
		userImg: "/userImage.png",
		userName: "Tracey Wilson",
		date: "Dec 26,2024",
	},
	{
		image: "/blog3.png",
		title: "5 Reasons to Study MBBS in Russia",
		description:
			"Discover why Uzbekistan is the perfect destination for aspiring doctors with affordable fees and globally recognized degrees.",
		userImg: "/userImage.png",
		userName: "Tracey Wilson",
		date: "Dec 26,2024",
	},
];
