import { HeroVideo } from '@/components/sections/HeroVideo';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ExperienceTriptych } from '@/components/sections/ExperienceTriptych';
import { UrgencyModule } from '@/components/sections/UrgencyModule';
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <PhilosophySection />
      <ExperienceTriptych />
      <UrgencyModule />
      <TestimonialCarousel />
    </>
  );
}
