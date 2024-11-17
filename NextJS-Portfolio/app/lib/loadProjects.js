import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'app/data/projects');

// Fetch all project paths
export function getAllProjectPaths() {
  const filenames = fs.readdirSync(projectsDirectory);
  return filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
}

// Fetch data for a single project
export function getProjectData(slug) {
  const filepath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, ...data, content };
}

// Fetch data for all projects
export function getAllProjectsData() {
  const filenames = fs.readdirSync(projectsDirectory);
  return filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    return getProjectData(slug);
  });
}
