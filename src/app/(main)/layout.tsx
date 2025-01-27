import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/Navbar";
import StudySection from "@/components/sections/StudySection";
import ExploreSection from "@/components/sections/ExploreSection";
import WhySection from "@/components/sections/WhySection";
import CountSection from "@/components/sections/CountSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import StudentsSection from "@/components/sections/StudentsSection";
import BlogsSection from "@/components/sections/BlogsSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function HomePageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full min-h-screen mx-auto">
			{/* NAVBAR */}
			<Navbar />

			{/* HERO SECTION */}
			<HeroSection />

			{/* STUDY SECTION 2 */}
			<StudySection />

			{/* EXPLORE SECTION */}
			<ExploreSection />

			{/* WHY SECTION */}
			<WhySection />

			{/* COUNTS SECTION */}
			<CountSection />

			{/* SERVICES SECTION */}
			<ServicesSection />

			{/* PARTNERS SECTION */}
			<PartnersSection />

			{/* STUDENTS SECTION */}
			<StudentsSection />

			{/* BLOGS SECTION */}
			<BlogsSection />

			{/* GALLERY SECTION */}
			<GallerySection />

			{/* FAQ SECTION */}
			<FaqSection />

			{/* CONTACT FORM */}
			<ContactSection />

			{/* FOOTER SECTION */}
			<FooterSection />
		</div>
	);
}
