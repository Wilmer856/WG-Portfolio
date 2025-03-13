import Portfolio from '@/components/shared/Portfolio';
import SectionTitle from '@/components/shared/SectionTitle';
import { works } from '@/data/works';
import Link from 'next/link';

const RecentWorkSection = () => {
  return (
    <>
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-10 grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {works
          .filter((_, index) => index < 6)
          .map((work) => (
            <Portfolio
              key={work.id}
              imageUrl={work.thumbnailUrl}
              category={work.category}
              title={work.title}
              href={`/projects/${work.id}`}
            />
          ))}
      </div>
    </>
  );
};

export default RecentWorkSection;
