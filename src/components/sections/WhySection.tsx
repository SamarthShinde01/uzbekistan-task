import Image from "next/image";
import WhySectionItem from "../WhySectionItem";
import HeadingAndTitle from "../HeadingAndTitle";

const UserImages: string[] = [
	"user1.png",
	"user2.png",
	"user3.png",
	"user4.png",
];

export default function WhySection() {
	return (
		<div className="hidden md:block w-full h-[681px] mt-20 px-4 sm:px-12 md:px-28">
			<div className="flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="w-full md:w-5/12 flex items-start flex-col space-y-6">
					<HeadingAndTitle heading1="Why" heading2="Uzbekistan Medi ?" />

					<div className="flex flex-col gap-y-6 justify-center">
						<WhySectionItem
							svg={
								<svg
									width="47"
									height="47"
									viewBox="0 0 47 47"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M23.5026 41.125L9.79427 33.6833V21.9333L1.96094 17.625L23.5026 5.875L45.0443 17.625V33.2917H41.1276V19.7792L37.2109 21.9333V33.6833L23.5026 41.125ZM23.5026 24.8708L36.9172 17.625L23.5026 10.3792L10.088 17.625L23.5026 24.8708ZM23.5026 36.6698L33.2943 31.3823V23.9896L23.5026 29.375L13.7109 23.9896V31.3823L23.5026 36.6698Z"
										fill="#1CB5BD"
									/>
								</svg>
							}
							title="Guaranteed Admission with Low Fees"
							description="Admission to top MBBS universities in Uzbekistan with affordable fees for Indian students."
						/>

						<WhySectionItem
							svg={
								<svg
									width="47"
									height="47"
									viewBox="0 0 47 47"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M23.5026 41.125L9.79427 33.6833V21.9333L1.96094 17.625L23.5026 5.875L45.0443 17.625V33.2917H41.1276V19.7792L37.2109 21.9333V33.6833L23.5026 41.125ZM23.5026 24.8708L36.9172 17.625L23.5026 10.3792L10.088 17.625L23.5026 24.8708ZM23.5026 36.6698L33.2943 31.3823V23.9896L23.5026 29.375L13.7109 23.9896V31.3823L23.5026 36.6698Z"
										fill="#1CB5BD"
									/>
								</svg>
							}
							title="Complete Support for Documentation"
							description="We provide end-to-end support for the necessary documentation required for MBBS admissions.    "
						/>

						<WhySectionItem
							svg={
								<svg
									width="41"
									height="41"
									viewBox="0 0 41 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18.7349 34.2096H22.162V31.7617C23.7939 31.468 25.1974 30.8315 26.3724 29.8523C27.5474 28.8732 28.1349 27.4207 28.1349 25.4951C28.1349 24.1242 27.7432 22.8676 26.9599 21.7253C26.1766 20.5829 24.6099 19.5874 22.2599 18.7388C20.3016 18.086 18.947 17.5148 18.1964 17.0253C17.4457 16.5357 17.0703 15.8666 17.0703 15.018C17.0703 14.1694 17.3722 13.5003 17.976 13.0107C18.5799 12.5211 19.453 12.2763 20.5953 12.2763C21.6398 12.2763 22.4557 12.5293 23.0432 13.0352C23.6307 13.5411 24.055 14.1694 24.3161 14.9201L27.4495 13.6471C27.0905 12.5048 26.4295 11.5093 25.4667 10.6607C24.5038 9.81207 23.4349 9.3388 22.2599 9.24088V6.79297H18.8328V9.24088C17.2009 9.59991 15.928 10.318 15.0141 11.3951C14.1002 12.4721 13.6432 13.6798 13.6432 15.018C13.6432 16.552 14.092 17.7923 14.9896 18.7388C15.8872 19.6853 17.2988 20.5013 19.2245 21.1867C21.2807 21.9374 22.7087 22.6065 23.5083 23.194C24.308 23.7815 24.7078 24.5485 24.7078 25.4951C24.7078 26.5721 24.3243 27.3636 23.5573 27.8695C22.7903 28.3754 21.8682 28.6284 20.7911 28.6284C19.7141 28.6284 18.7594 28.2938 17.9271 27.6247C17.0948 26.9556 16.4828 25.952 16.0911 24.6138L12.8599 25.8867C13.3168 27.4534 14.0267 28.7181 14.9896 29.681C15.9524 30.6438 17.2009 31.3048 18.7349 31.6638V34.2096ZM20.4974 40.0846C17.7884 40.0846 15.2425 39.5706 12.8599 38.5424C10.4773 37.5143 8.40469 36.119 6.64219 34.3565C4.87969 32.594 3.48438 30.5214 2.45625 28.1388C1.42812 25.7562 0.914062 23.2103 0.914062 20.5013C0.914062 17.7923 1.42812 15.2464 2.45625 12.8638C3.48438 10.4812 4.87969 8.40859 6.64219 6.64609C8.40469 4.88359 10.4773 3.48828 12.8599 2.46016C15.2425 1.43203 17.7884 0.917969 20.4974 0.917969C23.2064 0.917969 25.7523 1.43203 28.1349 2.46016C30.5175 3.48828 32.5901 4.88359 34.3526 6.64609C36.1151 8.40859 37.5104 10.4812 38.5385 12.8638C39.5667 15.2464 40.0807 17.7923 40.0807 20.5013C40.0807 23.2103 39.5667 25.7562 38.5385 28.1388C37.5104 30.5214 36.1151 32.594 34.3526 34.3565C32.5901 36.119 30.5175 37.5143 28.1349 38.5424C25.7523 39.5706 23.2064 40.0846 20.4974 40.0846ZM20.4974 36.168C24.871 36.168 28.5755 34.6503 31.6109 31.6148C34.6464 28.5794 36.1641 24.8749 36.1641 20.5013C36.1641 16.1277 34.6464 12.4232 31.6109 9.38776C28.5755 6.35234 24.871 4.83464 20.4974 4.83464C16.1238 4.83464 12.4193 6.35234 9.38385 9.38776C6.34844 12.4232 4.83073 16.1277 4.83073 20.5013C4.83073 24.8749 6.34844 28.5794 9.38385 31.6148C12.4193 34.6503 16.1238 36.168 20.4974 36.168Z"
										fill="#1CB5BD"
									/>
								</svg>
							}
							title="Affordable Fees"
							description="Studying abroad becomes easy with low tuition fees and reasonable living costs."
						/>

						<WhySectionItem
							svg={
								<svg
									width="41"
									height="41"
									viewBox="0 0 41 41"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.6641 24.418H28.3307V23.3409C28.3307 21.9048 27.6127 20.7461 26.1766 19.8648C24.7404 18.9836 22.8474 18.543 20.4974 18.543C18.1474 18.543 16.2543 18.9836 14.8182 19.8648C13.3821 20.7461 12.6641 21.9048 12.6641 23.3409V24.418ZM20.4974 16.5846C21.5745 16.5846 22.4965 16.2011 23.2635 15.4341C24.0306 14.6671 24.4141 13.7451 24.4141 12.668C24.4141 11.5909 24.0306 10.6688 23.2635 9.90182C22.4965 9.13481 21.5745 8.7513 20.4974 8.7513C19.4203 8.7513 18.4983 9.13481 17.7312 9.90182C16.9642 10.6688 16.5807 11.5909 16.5807 12.668C16.5807 13.7451 16.9642 14.6671 17.7312 15.4341C18.4983 16.2011 19.4203 16.5846 20.4974 16.5846ZM0.914062 40.0846V4.83464C0.914062 3.75755 1.29757 2.8355 2.06458 2.06849C2.8316 1.30148 3.75365 0.917969 4.83073 0.917969H36.1641C37.2411 0.917969 38.1632 1.30148 38.9302 2.06849C39.6972 2.8355 40.0807 3.75755 40.0807 4.83464V28.3346C40.0807 29.4117 39.6972 30.3338 38.9302 31.1008C38.1632 31.8678 37.2411 32.2513 36.1641 32.2513H8.7474L0.914062 40.0846ZM7.08281 28.3346H36.1641V4.83464H4.83073V30.5378L7.08281 28.3346Z"
										fill="#1CB5BD"
									/>
								</svg>
							}
							title="Free Counseling & Career Guidance"
							description="We offer personalized counseling and guidance to help students build a successful medical career."
						/>
					</div>
				</div>

				<div className="hidden md:flex items-start relative w-7/12 h-auto   space-x-4">
					<div className="flex items-center flex-col gap-4">
						<Image src="/image1.png" alt="image1" width={220} height={227} />
						<Image src="/image2.png" alt="image2" width={220} height={308} />
					</div>
					<div className="">
						<Image src="/image3.png" alt="image3" width={421} height={476} />
					</div>

					<div className="absolute bottom-14 left-28 w-44 h-36 bg-[#1CB5BD] rounded-md gap-2 flex items-center justify-center ">
						<div className="flex items-start flex-col space-y-3 pl-5">
							<div className="text-xl font-medium text-white">
								10k+ Trusted Students
							</div>
							<div className="flex -space-x-2 overflow-hidden">
								{UserImages.map((user, index) => (
									<Image
										key={index}
										src={`/${user}`}
										alt={`User ${user}`}
										width={40}
										height={40}
										className="inline-block h-10 w-10 rounded-full "
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
