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

// Fetch all project slugs
function getAllProjectSlugs() {
  const filenames = fs.readdirSync(projectsDirectory);
  return filenames.map((filename) => filename.replace(/\.md$/, ''));
}

// Get the previous project's link (with looping)
export function getPreviousProjectLink(currentSlug) {
  const slugs = getAllProjectSlugs();

  // If there is only one project, return null
  if (slugs.length <= 1) return null;

  const currentIndex = slugs.indexOf(currentSlug);

  // Loop back to the last project if current is the first
  const previousIndex = (currentIndex - 1 + slugs.length) % slugs.length;
  const previousSlug = slugs[previousIndex];

  return `/projects/${previousSlug}`;
}

// Get the next project's link (with looping)
export function getNextProjectLink(currentSlug) {
  const slugs = getAllProjectSlugs();

  // If there is only one project, return null
  if (slugs.length <= 1) return null;

  const currentIndex = slugs.indexOf(currentSlug);

  // Loop back to the first project if current is the last
  const nextIndex = (currentIndex + 1) % slugs.length;
  const nextSlug = slugs[nextIndex];

  return `/projects/${nextSlug}`;
}
