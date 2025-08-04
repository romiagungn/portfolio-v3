
import { PageLayout } from "~/components/layout/PageLayout";
import GradienBackground from "~/components/layout/GradientBackground";
import ExperienceSection from "~/components/section/ExperienceSection";
import HeroSection from "~/components/section/Hero";
import ProjectShowcase from "~/components/section/ProjectShowcase";
import ReviewsGrid from "~/components/section/ReviewGrid";
import CommunitySection from "~/components/section/Community";
import AboutMe from "~/components/section/AboutMe";

export default function Index() {
  return (
    <PageLayout>
      <GradienBackground>
        <HeroSection />
      </GradienBackground>
      <ProjectShowcase />
      <AboutMe />
      <CommunitySection />
      <ExperienceSection />
      <ReviewsGrid />
    </PageLayout>
  );
}
