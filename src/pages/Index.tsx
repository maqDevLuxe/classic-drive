import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import HeritagePartners from "@/components/home/HeritagePartners";
import CollectionGrid from "@/components/home/CollectionGrid";
import DrivingExperiences from "@/components/home/DrivingExperiences";
import HorsepowerMetrics from "@/components/home/HorsepowerMetrics";
import ChauffeurServices from "@/components/home/ChauffeurServices";
import ScenicRoutes from "@/components/home/ScenicRoutes";
import CoastalDriveSection from "@/components/home/CoastalDriveSection";
import MilesCounters from "@/components/home/MilesCounters";
import BlogSection from "@/components/home/BlogSection";
import InsuranceSafety from "@/components/home/InsuranceSafety";
import ReviewsSection from "@/components/home/ReviewsSection";
import CTAFooter from "@/components/home/CTAFooter";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HeritagePartners />
      <CollectionGrid />
      <DrivingExperiences />
      <HorsepowerMetrics />
      <ChauffeurServices />
      <ScenicRoutes />
      <CoastalDriveSection />
      <MilesCounters />
      <BlogSection />
      <InsuranceSafety />
      <ReviewsSection />
      <CTAFooter />
    </main>
  );
};

export default Index;
