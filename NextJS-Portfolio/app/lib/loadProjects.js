import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'app/data/projects');

export function getAllProjectPaths() {
  const filenames = fs.readdirSync(projectsDirectory);
  return filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));
}

export function getProjectData(slug) {
  const filepath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, ...data, content };
}