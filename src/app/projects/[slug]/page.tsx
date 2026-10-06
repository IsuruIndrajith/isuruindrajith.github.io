import { notFound } from 'next/navigation';
import projectsData from '@/content/projects.json';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient slug={params.slug} />;
}