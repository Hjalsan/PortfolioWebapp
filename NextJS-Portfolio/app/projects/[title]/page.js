import { notFound } from 'next/navigation';
import projects from '../../data/projects.json';

export default async function ProjectPage({ params }) {
  const { title } = await params;
  const project = projects.find((p) => p.title === decodeURIComponent(title));

  if (!project) {
    return notFound(); // 404 if project is not found
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
      <div className="project-body">{project.body}</div>
    </div>
  );
}
