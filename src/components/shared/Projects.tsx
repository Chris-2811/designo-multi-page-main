import { useEffect } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { webProjects, appProjects, graphicProjects } from '@/data/index.ts';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Projects() {
  const [data, setData] = useState<any>();
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (pathname === '/web-design') {
      setData(webProjects);
    } else if (pathname === '/app-design') {
      setData(appProjects);
    } else {
      setData(graphicProjects);
    }
  });

  return (
    <section className="my-[6rem] md:my-[7.5rem]">
      <div className="container grid  gap-10 lg:grid-cols-3 ">
        {data &&
          data.map((item: any) => <ProjectCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}

export default Projects;
