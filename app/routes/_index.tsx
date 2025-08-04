import { PageLayout } from "~/components/layout/PageLayout";
import GradienBackground from "~/components/layout/GradientBackground";
import ExperienceSection from "~/components/section/ExperienceSection";
import HeroSection from "~/components/section/Hero";
import ReviewsGrid from "~/components/section/ReviewGrid";
import AreaOfExpertise from "~/components/section/AreaOfExpertise";
import AboutMe from "~/components/section/AboutMe";
import Blogs from "~/components/section/Blogs";
import ProjectShowcase from "~/components/section/ProjectShowcase";
import ParallaxScrollVelocity from "~/components/ui/paralax/ParallaxScrollVelocity";

export default function Index() {
  return (
    <PageLayout>
      <GradienBackground>
        <HeroSection />
      </GradienBackground>
      <AboutMe />
      <ProjectShowcase />
      <Blogs/>
      <AreaOfExpertise />
      <ParallaxScrollVelocity />
      <ExperienceSection />
      <ReviewsGrid />
    </PageLayout>
  );
}
