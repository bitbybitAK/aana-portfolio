import Cursor from '@/components/Cursor';
import Firefly from '@/components/Firefly';
import Sidebar from '@/components/Sidebar';
import About from '@/components/sections/About';
import Builds from '@/components/sections/Builds';
import AnalyticsProjects from '@/components/sections/AnalyticsProjects';
import CaseStudies from '@/components/sections/CaseStudies';
import PlaceholderStub from '@/components/sections/PlaceholderStub';

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Firefly />
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] min-h-screen relative">
        <Sidebar />
        <main className="relative max-w-[1080px] px-6 py-8 lg:pt-14 lg:pr-[72px] lg:pb-[120px] lg:pl-[72px]">
          <About />
          <Builds />
          <AnalyticsProjects />
          <CaseStudies />
          <PlaceholderStub />
        </main>
      </div>
    </>
  );
}
