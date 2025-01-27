import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
	return (
		<div className="w-full h-[576px] px-4 sm:px-12 md:px-28 py-20 ">
			<div className="flex items-center flex-col text-[#000000] text-center space-y-10">
				<div className="text-2xl sm:text-3xl md:text-4xl font-semibold">
					<span className="text-[#16A8AF]">F</span>requently{" "}
					<span className="text-[#16A8AF]">A</span>sked{" "}
					<span className="text-[#16A8AF]">Q</span>uestions
				</div>

				<span className="text-sm sm:text-base md:text-lg">
					Celebrating Achievements, One Click at a Time!
				</span>

				{/* Accordion Layout */}
				<Accordion
					type="single"
					collapsible
					className="w-full sm:w-4/5 md:w-3/5 shadow-xl"
				>
					<AccordionItem value="item-1" className="pt-2 px-3">
						<AccordionTrigger>
							Q. Is an MBBS degree from Georgia recognized globally?
						</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2" className="pt-2 px-3">
						<AccordionTrigger>
							Q. Is an MBBS degree from Georgia recognized globally?
						</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3" className="pt-2 px-3">
						<AccordionTrigger>
							Q. Is an MBBS degree from Georgia recognized globally?
						</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4" className="pt-2 px-3">
						<AccordionTrigger>
							Q. Is an MBBS degree from Georgia recognized globally?
						</AccordionTrigger>
						<AccordionContent>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
